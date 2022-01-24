# INITIAL SETUP
1. Download and install Docker Desktop (https://www.docker.com/products/docker-desktop)
2. Download and install VSCode (https://code.visualstudio.com/download)
3. Run Docker Desktop
4. Open VSCode, install the Docker extension (https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
5. Install the Remote Development extension (https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
6. You should probably restart your computer now

# VSCODE SETUP
1. Open VSCode, File > Open Folder > JID1353-fluorospectroscopy-lab (git repo)
2. Make sure you have the Explorer tab selected
3. Right click docker-compose.yml on the left, and select "Compose Up" from the context menu. 
4. Wait for the terminal at the bottom to display "Creating fluorospectroscopy-docker ... done"
5. Select the Docker whale on the left, expand the arrow to the left of jid1353-fluorospectroscopy-lab
6. Right click on node:latest, select "Attach Visual Studio Code" from the context menu
7. A new VSCode window should have opened. Go to File > Open Folder > .. > Fluorospectroscopy-App > OK
8. At the top, go to Terminal > New Terminal
9. Run the command 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
10. Close the terminal by clicking the trash can in the top right of the terminal.
11. Go to Terminal > New Terminal. Run the command 'nvm install --lts'
12. Run the command 'yarn install', this will take a while
13. Once the above is done, run 'yarn start'
14. After a bit, you should see the terminal say "Starting the development server..."
15. Your browser should open, and eventually it will display the React app.

Unfortunately, when you first start the container, you will need to type 'nvm use --lts' before you can start the app.