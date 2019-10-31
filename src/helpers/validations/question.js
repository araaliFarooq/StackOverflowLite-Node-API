import * as Joi from '@hapi/joi';

const questionCreateSchema = Joi.object()
  .keys({
    title: Joi.string()
      .required()
      .trim(),
    qstnbody: Joi.string()
      .required()
      .trim(),
    tags: Joi.array()
  })
  .min(2)
  .max(3);

export default questionCreateSchema;
