const StyleDictionary = require("style-dictionary");

const filters = [

    {
        name: 'colors',
        matcher: (token) => ['color', 'gradient'].indexOf(token.attributes.category) >= 0
    },
    {
        name: 'typography',
        matcher: (token) => token.attributes.category === 'font'
    },
    {
        name: 'grids',
        matcher: token => token.attributes.category === 'grid',
    },
    {
        name: 'breakpoints',
        matcher: (token) => ['breakpoint', 'breakpoints'].indexOf(token.attributes.category) >= 0
    },
    {
        name: 'sizes',
        matcher: (token) => ['size', 'sizes'].indexOf(token.attributes.category) >= 0
    },
    {
        name: 'motion',
        matcher: token => token.attributes.category === 'motion',
    },
    {
        name: 'effects',
        matcher: token => token.attributes.category === 'effect',
    },
    {
        name: 'radii',
        matcher: (token) => ['radii', 'radius'].indexOf(token.attributes.category) >= 0
    },
    {
        name: 'borders',
        matcher: (token) => ['border', 'borders'].indexOf(token.attributes.category) >= 0
    },
    {
        name: 'spacing',
        matcher: token => token.attributes.category === 'spacing',
    },
]

filters.forEach(filter => {
    StyleDictionary.registerFilter({
        name: filter.name,
        matcher: filter.matcher,
    });
})

StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    matcher: token => {
        return token.unit === 'pixel' && token.value !== 0
    },
    transformer: token => {
        return `${token.value}px`
    },
})

StyleDictionary.registerTransform({
    name: 'size/percent',
    type: 'value',
    matcher: token => {
        return token.unit === 'percent' && token.value !== 0
    },
    transformer: token => {
        return `${token.value}%`
    },
})

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['less'].concat([
        'size/px',
        'size/percent',
    ]),
})

module.exports = {
    source: ["tokens/*.json"],
    platforms: {
        "json-flat": {
            transformGroup: "js",
            buildPath: "dist/json/",
            files: (() => filters.map(filter => {
                return {
                    "destination": `_${filter.name}.json`,
                    "format": "json/flat",
                    filter: filter.name
                }
            }))()
        },
        "scss": {
            transformGroup: "custom/scss",
            buildPath: "dist/scss/",
            files: (() => filters.map(filter => {
                return {
                    "destination": `_${filter.name}.scss`,
                    "format": "scss/variables",
                    filter: filter.name
                }
            }))()
        },
    },
};
