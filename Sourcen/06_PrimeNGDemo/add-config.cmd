@echo off

call ng config projects.PrimeNGDemo.architect.build.options.styles[0] "src/styles.css"
call ng config projects.PrimeNGDemo.architect.build.options.styles[1] "node_modules/primeicons/primeicons.css"
call ng config projects.PrimeNGDemo.architect.build.options.styles[2] "node_modules/primeng/resources/primeng.min.css"
call ng config projects.PrimeNGDemo.architect.build.options.styles[3] "node_modules/primeng/resources/themes/nova/theme.css"
call ng config projects.PrimeNGDemo.architect.build.options.styles

call ng config projects.PrimeNGDemo.architect.build.options.scripts[0] "node_modules/chart.js/dist/chart.js"
call ng config projects.PrimeNGDemo.architect.build.options.scripts

pause