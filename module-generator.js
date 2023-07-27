// create-module.js
const fs = require("fs")
const path = require("path")

const moduleName = process.argv[2]

if (!moduleName) {
  console.error(
    "Module name not provided. Usage: npm run create-module <module-name>"
  )
  process.exit(1)
}

function createModule(moduleName) {
  const modulePath = path.join(__dirname, "src/modules", moduleName)
  fs.mkdirSync(modulePath)

  const structure = [
    { path: "data/datasources", file: "[module]-datasource.ts" },
    { path: "data/repositories", file: "[module]-repository-impl.ts" },
    { path: "domain/entities", file: "[module].ts" },
    { path: "domain/repositories", file: "[module]-repository.ts" },
    { path: "domain/services", file: "[module]-service.ts" },
    { path: "domain/usecases" },
    { path: "presentation/components" },
    { path: "presentation/pages", file: "[module]-route.ts" },
    { path: "presentation/hooks", file: "use-[module].ts" },
    { path: "presentation/state", file: "[module]-state.ts" },
  ]

  structure.forEach((folder) => {
    const folderPath = path.join(modulePath, folder.path)
    fs.mkdirSync(folderPath, { recursive: true })

    if (folder.file) {
      const filename = folder.file.replace("[module]", moduleName)
      const filePath = path.join(folderPath, filename)
      fs.writeFileSync(filePath, "")
    }
  })
}

createModule(moduleName)
