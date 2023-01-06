const path = require("path");
const express = require("express");

const router = express.Router();

const products = [
  {
    id:1,
    name: "producto 1",
    description: "first product",
    iamge: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fes.chevrolet.com%2Fcontent%2Fdam%2Fchevrolet%2Fna%2Fus%2Fenglish%2Findex%2Fvehicles%2F2023%2Fperformance%2Fcamaro%2F01-images%2Fcolorizer%2Fcoupe%2F2023-camaro-2ss-g7c-colorizer.jpg%3Fimwidth%3D960&imgrefurl=https%3A%2F%2Fes.chevrolet.com%2Fperformance%2Fcamaro&tbnid=aUpk1W21pdbE_M&vet=12ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ..i&docid=7jP3J2A_it7y9M&w=1024&h=512&q=camaro&client=opera&ved=2ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ"
  },
  {
    id:2,
    name: "producto 2",
    description: "second product",
    iamge: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fes.chevrolet.com%2Fcontent%2Fdam%2Fchevrolet%2Fna%2Fus%2Fenglish%2Findex%2Fvehicles%2F2023%2Fperformance%2Fcamaro%2F01-images%2Fcolorizer%2Fcoupe%2F2023-camaro-2ss-g7c-colorizer.jpg%3Fimwidth%3D960&imgrefurl=https%3A%2F%2Fes.chevrolet.com%2Fperformance%2Fcamaro&tbnid=aUpk1W21pdbE_M&vet=12ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ..i&docid=7jP3J2A_it7y9M&w=1024&h=512&q=camaro&client=opera&ved=2ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ"
  },
  {
    id:3,
    name: "producto 3",
    description: "third product",
    iamge: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fes.chevrolet.com%2Fcontent%2Fdam%2Fchevrolet%2Fna%2Fus%2Fenglish%2Findex%2Fvehicles%2F2023%2Fperformance%2Fcamaro%2F01-images%2Fcolorizer%2Fcoupe%2F2023-camaro-2ss-g7c-colorizer.jpg%3Fimwidth%3D960&imgrefurl=https%3A%2F%2Fes.chevrolet.com%2Fperformance%2Fcamaro&tbnid=aUpk1W21pdbE_M&vet=12ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ..i&docid=7jP3J2A_it7y9M&w=1024&h=512&q=camaro&client=opera&ved=2ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ"
  },
  {
    id:4,
    name: "producto 4",
    description: "fourth product",
    iamge: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fes.chevrolet.com%2Fcontent%2Fdam%2Fchevrolet%2Fna%2Fus%2Fenglish%2Findex%2Fvehicles%2F2023%2Fperformance%2Fcamaro%2F01-images%2Fcolorizer%2Fcoupe%2F2023-camaro-2ss-g7c-colorizer.jpg%3Fimwidth%3D960&imgrefurl=https%3A%2F%2Fes.chevrolet.com%2Fperformance%2Fcamaro&tbnid=aUpk1W21pdbE_M&vet=12ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ..i&docid=7jP3J2A_it7y9M&w=1024&h=512&q=camaro&client=opera&ved=2ahUKEwjRz4_pnq78AhWatZUCHZAHDG8QMygBegUIARDkAQ"
  }
];

router.get("/", (req, res) => {
  const {id} = req.params;
  return res.status(200).render("vistas/list.ejs",{ products,});
});

router.get("/:id", (req, res) => {
  const {id} = req.params;

  const product = products.find((product) => product.id == id);

  return res.status(200).render("vistas/details.ejs",{ product, });
});

module.exports = router;