import Joi from "joi";

import { generalFields } from './../../middleware/validation.middleware.js';

export const createCategorySchema = Joi.object({
    name: generalFields.categoryName,
    image : generalFields.image,
});

export const getCategoryByIdSchema = Joi.object({
    id : generalFields.id,
});

export const deleteCategorySchema = Joi.object({
    id : generalFields.id,
});


export const updateCategorySchema = Joi.object({
    id : generalFields.id,
    name: generalFields.categoryName.optional(),
    status: Joi.string().valid("Active", "NotActive").messages({
        "any.only": "Status must be either 'Active' or 'NotActive'."
    }),
    image : generalFields.image.optional(),

});
