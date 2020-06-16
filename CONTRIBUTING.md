# Contributing to Bikeapp

Thank you for helping us make this project great and being a part of the Bikeapp community. Here are a few guidelines that will help you along the way.

## Code of Conduct

Bikeapp has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Issues

### Before creating issues please

* Read the documentation.
* Search for duplicates.
* Make sure you're following the templates, if you don't see a template for your type of issue feel free to create a feature issue for it.

### At the moment you're creating an issue please

* Make sure you're following the issues naming standard

### Issues naming standard

[Organization acronym][Project first letter][Team first letter] [Issue name]

#### Example

``` bash
DFBB Contribution Guideline
```

* DF = Organization acronym / Delta Force
* B = Project first letter / Bikeapp
* B = Team first letter / Backend = B / Web Client = W
* Contribution Guideline = Issue name

## Branches

### Branches naming standard

[Organization acronym][Project first letter][Team first letter]-[Issue ID]

### Example

``` bash
git checkout -b DFBB-1
git checkout -b DFBW-1
```

* DF = Organization acronym / Delta Force
* B = Project first letter / Bikeapp
* B = Team first letter / Backend = B / Web Client = W
* 1 = Issue ID

## Commits

### Commits naming standard

[Branch Name] + [Verb] + [Substantive] + [What for]

### Example

``` bash
git commit -m 'DFBB-1 Added logger class to use a logger service'
```

* Branch Name - DFBB-1
* Verb - Added
* Substantive - logger class
* What for - to use a logger service

## Pull Requests

### Before creating a pull request please

* Make sure you created an [Issue](https://www.github.com/Master-delta-force/bikeapp/issues) related to it and you're following the [issues section](#Issues) recommendations
* Make sure you're following the [branches section](#Branches) recommendations
* Make sure you're following the [commits section](#Commits) recommendations

## License

By contributing your code to the Master-delta-force/bikeapp GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).
