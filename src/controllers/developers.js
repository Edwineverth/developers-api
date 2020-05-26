import Developer from "../models/developers";

export async function getDevelopers(req, res, next) {
  try {
    const developers = await Developer.findAll();
    res.status(200).json({
      data: developers,
    });
  } catch (err) {
    next(err);
  }
}

export async function createDeveloper(req, res, next) {
  const { nombres_completos, link_github, tecnologias_conocidas } = req.body;
  try {
    let newDeveloper = await Developer.create(
      {
        nombres_completos,
        link_github,
        tecnologias_conocidas,
      },
      {
        fields: ["nombres_completos", "link_github", "tecnologias_conocidas"],
      }
    );
    if (newDeveloper) {
      return res.status(201).json({
        data: newDeveloper,
        message: "Developer created successfully",
      });
    }
  } catch (err) {
    next(err);
  }
}

export async function getDeveloper(req, res, next) {
  try {
    const { id } = req.params;
    const developer = await Developer.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      data: developer,
      message: "developer retrieved",
    });
  } catch (err) {
    next(err);
  }
}

export async function updateDeveloper(req, res, next) {
  const { id } = req.params;
  const { nombres_completos, link_github, tecnologias_conocidas } = req.body;

  try {
    const developer = await Developer.findOne({
      attributes: ["nombres_completos", "link_github", "tecnologias_conocidas"],
      where: {
        id,
      },
    });
    let updateDeveloper = null;

    updateDeveloper = await Developer.update(
      {
        nombres_completos,
        link_github,
        tecnologias_conocidas,
      },
      { where: { id } }
    );

    res.status(200).json({ message: "Developer Updated", updateDeveloper });
  } catch (err) {
    next(err);
  }
}

export async function deleteDeveloper(req, res, next) {
  const { id } = req.params;
  try {
    const developerCount = await Developer.destroy({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ message: "Developer deleted", count: developerCount });
  } catch (err) {
    next(err);
  }
}
