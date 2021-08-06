const StyleDictionary = require("style-dictionary");

StyleDictionary.registerTransform({
    name: "size/px", // notice: the name is an override of an existing predefined method (yes, you can do it)
    type: "value",
    matcher: function (prop) {
        /* supports both "pixel" and "pixels" */

        return (
            prop &&
            prop.original &&
            prop.original.unit &&
            prop.original.unit.startsWith("pixel")
        );
    },
    transformer: function (prop) {
        return `${prop.value}px`;
    },
});

/* Basic filter to separate typography tokens. It might need tweaking depending on the token data shape */
StyleDictionary.registerFilter({
    name: "isTypography",
    matcher: function (prop) {
        return (
            prop.name.startsWith("headline") || prop.name.startsWith("paragraph")
        );
    },
});

module.exports = {
    source: ["./design-tokens.json"],
    platforms: {
        js: {
            transformGroup: "js",
            buildPath: "./dist/js/",
            transforms: ["size/px", "name/cti/camel"],
            /* We split tokens into separate files - it will be easier to use them this way */
            files: [
                /* Filter and extract typography tokens */
                {
                    destination: "typography.js",
                    format: "javascript/es6",
                    filter: "isTypography",
                },
                /* Filter and extract color tokens*/
                {
                    destination: "colors.js",
                    format: "javascript/es6",
                    filter: {
                        type: "color",
                    },
                },
            ],
        },
        sass: {
            transformGroup: "sass",
            buildPath: "./dist/sass/",
            transforms: ["size/px", "name/cti/camel"],
            /* We split tokens into separate files - it will be easier to use them this way */
            files: [
                /* Filter and extract typography tokens */
                {
                    destination: "typography.scss",
                    format: "scss/variables",
                    filter: "isTypography",
                },
                /* Filter and extract color tokens*/
                {
                    destination: "colors.scss",
                    format: "scss/variables",
                    filter: {
                        type: "color",
                    },
                },
            ],
        },
    },
};
