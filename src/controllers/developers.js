import Developer from "../models/developers";

export async function getDevelopers(req, res) {
  const developers = await Developer.findAll();
  res.json({
    data: developers,
  });
}

export async function createDeveloper(req, res) {
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
      return res.status(200).json({
        message: "Developer created successfully",
        data: newDeveloper,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
}

export async function getDeveloper(req, res) {
  const { id } = req.params;
  const developer = await Developer.findOne({
    where: {
      id,
    },
  });
  res.json(developer);
}

export async function updateDeveloper(req, res) {
  const { id } = req.params;
  const { nombres_completos, link_github, tecnologias_conocidas } = req.body;
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

  res.json({ message: "Task Updated", updateDeveloper });
}

export async function deleteDeveloper(req, res) {
  const { id } = req.params;
  const developerCount = await Developer.destroy({
    where: {
      id,
    },
  });
  res.json({ message: "Task deleted", count: developerCount });
}
