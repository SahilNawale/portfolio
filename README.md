Change the path of resources in projectData file.
Change the path of PDF files in Publications. 
To deploy on GitHub : 
	1. Add homepage link to package.json
	2. Add predeploy : "npm run build" in scripts
	3. Add deploy : "gh-pages -d build in scripts"
	4. Run npm run build
	5. Upload the build folder to a GitHub repo.
	6. Go to repo settings > pages > set deploy branch to the branch on which build folder exists. 

Use --force to install any more packages.
