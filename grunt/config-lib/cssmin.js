module.exports = {
  target: {
    options: {

    },
    files: [
      {'<%= pkg.themeFolder %>/_dev/css/icons.data.png.min.css': ['<%= pkg.themeFolder %>/_dev/css/icons.data.png.css']},
      {'<%= pkg.themeFolder %>/_dev/css/icons.data.svg.min.css': ['<%= pkg.themeFolder %>/_dev/css/icons.data.svg.css']},
      {'<%= pkg.themeFolder %>/_dev/css/icons.fallback.min.css': ['<%= pkg.themeFolder %>/_dev/css/icons.fallback.css']},
    ]
  }
};
