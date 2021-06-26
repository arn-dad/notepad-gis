{
  "compilerOptions": {
  "target": "esnext",
  "baseUrl": "./src",
  "jsx": "react",
    "paths": {
      "@modules/*": ["./modules/*"],
      "@config/*": ["./config/*"]
     }
  },
  "exclude": ["node_modules", "**/node_modules/*", "build"]
}