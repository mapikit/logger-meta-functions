# Logger Meta Functions
A log suite for helping you log in your system using Meta System

----
## Interface
There are four functions in this package, `log`, `infoLog`, `warnLog` and `errorLog`, all of them share the same interface, but have a different colored output.

The logs, by default, comes in the following format: 
`[YYYY-MM-DD HH:mm:SS-ssss ms] || LOGLEVEL::<message>`

### Functions Inputs
- message : `string` - required
- data : `any` - optional

> There are no outputs for any function
