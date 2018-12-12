#! /bin/sh

cd ../../node_modules/get-yarn-workspaces;
rm -rf crna-make-symlinks-for-yarn-workspaces metro-bundler-config-yarn-workspaces react-app-rewire-yarn-workspaces workspaces-example .gitignore .prettierrc README.md views.css;
mv get-yarn-workspaces/* ./;
rm -rf get-yarn-workspaces