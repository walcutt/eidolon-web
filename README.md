# eidolon-web
Web platform for managing character sheets for the Eidolon RPG.

## Running this Project
### For development
`docker compose up`
### For production
`docker compose -f docker-compose.prod.yml up -d`

## Configuration
You should update the Caddyfile to refer to the url you are deploying to if deploying to your own site, or HTTPS verification will not work.