# n-color
[![Build Status](https://github.com/SkinnyPeteTheGiraffe/n-color/actions/workflows/ci.yml/badge.svg)](https://github.com/SkinnyPeteTheGiraffe/n-color/actions/workflows/ci.yml?query=branch%3Amain+)
[![Coverage Status](https://coveralls.io/repos/github/SkinnyPeteTheGiraffe/n-color/badge.svg?branch=main)](https://coveralls.io/github/SkinnyPeteTheGiraffe/n-color?branch=main)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1ea5d484507b4ed8812d44c30cf72c43)](https://www.codacy.com/gh/SkinnyPeteTheGiraffe/n-color/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SkinnyPeteTheGiraffe/n-color&amp;utm_campaign=Badge_Grade)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg)](LICENSE.md)
![Best Badge](https://img.shields.io/badge/another%20js%20library-yes-green)
![Purple](https://img.shields.io/badge/purple-purple)

#### _"What even is this? Why are you asking me what I think?"&nbsp;&nbsp;—&nbsp;&nbsp;<small>Very Important, Real Person</small>_

<div>
    <div style="text-align: center;">
      <a href="https://skinnypetethegiraffe.github.io/n-color/" target="blank"><img src="site/docs/_media/n-color-logo.svg" width="120" alt="Nest Logo" /></a>
      <br/>
    </div>
    <div style="text-align: center;">
        <a href="https://skinnypetethegiraffe.github.io/n-color/" target="blank">Documentation</a>
        &nbsp;&nbsp;—&nbsp;&nbsp;
        <a href="https://skinnypetethegiraffe.github.io/n-color/api/" target="blank">API</a>
        <div style="text-align: center;">
            Simple yet powerful, lightweight, true color conversion and manipulation library.
        </div>
    </div>
</div>

## Description
<hr />

Having used the [Qix-/color](https://github.com/Qix-/color) for as long as I can remember when it comes to dealing with color libraries, and while
it's a great library, I wanted to approach it from idea of treating each color model as a separate instance.<br/><br/>Most available color
libraries rely on a single color model and output values for various spaces. This library differs in the fact each color model is its own
instance, and each operation is preformed within that color space (some operations require conversion) to ensure accuracy of the color.
This can be used for color-sensitive operations, isolate certain color models, as well as simple conversations and manipulations.

## Features
<hr />

  * Supports multiple color models (Ex. [RGBA](https://en.wikipedia.org/wiki/RGBA_color_model), [HWB](https://en.wikipedia.org/wiki/HWB_color_model), [HSL & HSV](https://en.wikipedia.org/wiki/HSL_and_HSV))
  * Accepts CSS [color-names](https://www.w3schools.com/colors/colors_names.asp)
  * Full of features and easy-to-use ([Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern#:~:text=The%20builder%20pattern%20is%20a,Gang%20of%20Four%20design%20patterns.) design)
  * Written in Typescript
  * Plenty of QOL enchantments
  * Works directly within the color space instead of relying on single color model to generate output values
  * Dependency free
  * **Will not do your taxes, sorry...**

### Supported Color Spaces
* RGBA
* HSV
* HWB
* HSL
* CMYK (Coming Soon)
## Example
```typescript
import { RGBA } from 'n-color';

const cssColor = RGBA.fromCssColor('RebeccaPurple');    // Accepts CSS Color Names
const shortHandHex = RGBA.fromHex('000');               // Can use shorthand hex values with and without hashtags
const hex = RGBA.fromHex('#663399');                    // Of course you can use hex (for any color space)
const rgb = RGBA.fromRGBA(102, 51, 153);                // Ability to pass in values (useful for external color space modfications)
const rgba = RGBA.fromRGBA(102, 51, 153, 0.44);         // Use alpha when applicable
const hslFromRGBA = RGBA.fromCssColor('RebeccaPurple')  // Easily switch between color models
    .toSpace('hsl');                                            

console.log(cssColor.toHexString());                     // #663399
console.log(shortHandHex.toArray());                     // [0,0,0,1]
console.log(rgb.toObject());                             // {"red":102,"green":51,"blue":153,"alpha":1}
console.log(rgb.toString());                             // rgb(102,51,153)
console.log(rgba.toString(true));                        // rgba(102,51,153,0.44)
console.log(hex.mix(shortHandHex.toObject(), 0.24)       // #4e2774
    .toString()); 
console.log(rgba.toHexString(true))                      // 663399
console.log(hslFromRGBA.toString());                     // hsl(270,50%,40%)
```

## Installation <small>(Coming Soon™)</small>
```shell
# NPM
npm install n-color
# PNPM
pnpm install n-color
# Yarn
yarn add n-color
```
