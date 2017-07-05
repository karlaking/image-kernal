# Convolution Matrix For Images 

This is a simple command line tool that expects a file containing a nested array of values representing an image and pixel values and returns an image containing values averaged with their neighbors. It is still in development, but this readme should be up-to-date.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Node v7.10.0
npm 4.2.0

### Installing

A step by step series of examples that tell you have to get a development env running:

Clone the directory locally. 

```
git clone https://github.com/karlaking/image-kernal.git
```

Navigate into the directory

```
cd image-kernal
```

Install the node dependencies

```
npm install
```

To use the tool via the command line run:

```
node convolution.js -i sampleImage.txt
```

The input parameter specifies a file to run the matrix on. I've set-up a parameter for size which can modify the reach of pixels to average, but is next on my list to complete. 

