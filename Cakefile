fs = require "fs"
{exec} = require "child_process"

publicFolders = [
    "public"
    "public/js"
    "public/css"
    "public/fonts"
]

assets =
    js: [
        "angular/angular.min.js"
        "angular/angular.min.js.map"
        "angular-route/angular-route.min.js"
        "angular-route/angular-route.min.js.map"
        "coffee-script/extras/coffee-script.js"
        "less/dist/less.min.js"
    ]
    fonts: [
        "fontawesome/fonts/fontawesome-webfont.eot"
        "fontawesome/fonts/fontawesome-webfont.svg"
        "fontawesome/fonts/fontawesome-webfont.ttf"
        "fontawesome/fonts/fontawesome-webfont.woff"
    ]
    css: [
        "bootstrap/dist/css/bootstrap.min.css"
        "fontawesome/css/font-awesome.min.css"
    ]

pwd = __dirname

task "build",
    "Prepares public folders.",
    ->
        for folder in publicFolders
            fs.mkdirSync folder unless fs.existsSync folder

        exec "cp -Rf #{pwd}/assets/ #{pwd}/public"

        for type, files of assets
            for file in files
                exec "cp -f #{pwd}/bower_components/#{file} #{pwd}/public/#{type}/"

invoke "build"
