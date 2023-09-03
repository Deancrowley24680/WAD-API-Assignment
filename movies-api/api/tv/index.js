import express from 'express';
import { tvSeries, tvSeriesReviews, tvSeriesDetails } from './tvData';
import uniqid from 'uniqid';
import seriesModel from './tvModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingSeries } from '../tmdb-api';
import { getTrendingSeries } from '../tmdb-api';

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    [page, limit] = [+page, +limit];

    const totalDocumentsPromise = seriesModel.estimatedDocumentCount();
    const seriesPromise = seriesModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise;
    const series = await seriesPromise;

    const returnObject = { 
        page: page, 
        total_pages: Math.ceil(totalDocuments / limit), 
        total_results: totalDocuments, 
        results: series 
    };

    res.status(200).json(returnObject);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const series = await seriesModel.findBySeriesDBId(id);
    if (series) {
        res.status(200).json(series);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.', 
            status_code: 404
        });
    }
}));

router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    if (tvSeriesReviews.id == id) {
        res.status(200).json(tvSeriesReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.', 
            status_code: 404
        });
    }
});

router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    
    if (tvSeriesReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvSeriesReviews.results.push(req.body);
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingSeries = await getUpcomingSeries();
    res.status(200).json(upcomingSeries);
}));

router.get('/tmdb/trending', asyncHandler( async(req, res) => {
    const trendingSeries = await getTrendingSeries();
    res.status(200).json(trendingSeries);
}));

export default router;
