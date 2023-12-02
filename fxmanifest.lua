fx_version 'cerulean'
games {'gta5'}

author "Ben Macleod"
description "React + Vite  Frontend for NYX"
version "0.1.0"

shared_scripts {
    "@nyx_events/imports/shared.lua",
}

client_scripts {
    "client/main.lua",
}

ui_page 'web/build/index.html'
files {
	'web/build/index.html',
	'web/build/assets/*.css',
	'web/build/assets/*.js',
	'web/build/assets/*.ttf',
}