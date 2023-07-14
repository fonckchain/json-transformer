const fs = require('fs');
const path = require('path');

// Define the input file and output directory
const inputFile = 'C:\\Users\\Fonck\\Documents\\UCI\\Consultoria Blockchain\\Info-certificaciones\\Fundamentos-del-Enfoque-Ecosistemico.json';
const outputDir = 'C:\\Users\\Fonck\\Documents\\UCI\\Consultoria Blockchain\\Info-certificaciones\\Transformed';

// Read the original JSON data
const originalData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

// Flatten the data
const flattenedData = originalData.flat();

// Transform the data
const transformedData = flattenedData.map(student => ({
    Name: student[0],
    Email: student[1],
    Date: student[2],
    Institution: student[3],
    Code: student[4]
}));

// Get the name of the input file without extension
const inputFileName = path.basename(inputFile, path.extname(inputFile));

// Define the output file path
const outputFile = path.join(outputDir, `${inputFileName}_transformed.json`);

// Write the transformed data back to a new JSON file
fs.writeFileSync(outputFile, JSON.stringify(transformedData), 'utf8');
