/* globals blanket */

blanket.options({
   modulePrefix: "client",
   filter: "//.*client/.*/",
   antifilter: "//.*(tests|template).*/",
   loaderExclusions: [],
   enableCoverage: true
});