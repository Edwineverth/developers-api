import joi from "@hapi/joi";

//const developerIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const developerIdSchema = joi.number();
const developerFullName = joi.string().max(200);
const developerLinkGithub = joi.string().uri();
const developerTechnology = joi.array().items(joi.string().max(50));

const createDeveloperSchema = {
  nombres_completos: developerFullName.required(),
  link_github: developerLinkGithub.required(),
  tecnologias_conocidas: developerTechnology.required(),
};

const updateDeveloperSchema = {
  nombres_completos: developerFullName.required(),
  link_github: developerLinkGithub.required(),
  tecnologias_conocidas: developerTechnology.required(),
};

module.exports = {
  createDeveloperSchema,
  updateDeveloperSchema,
  developerIdSchema,
};
