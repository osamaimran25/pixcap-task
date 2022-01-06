import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
const { exec } = require('child_process');
const fs = require('fs');

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getEncodedImage = async (req: Request, res: Response, next: NextFunction) => {
    let url     = req.query.url 
    let timestamp =  req.query.timestamp 
    exec(`ffmpeg -ss ${timestamp} -i ${url} -vframes 1 -vcodec png -an -y osama.png`, (err: any, stdout: any, stderr: any) => {
        if (err) {
          // node couldn't execute the command
          return res.status(400).json({
            message: err
        });
        }
      
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        try {
            const image =  fs.readFileSync('osama.png');
            const encodedimage = new Buffer(image).toString('base64')
            fs.unlinkSync("osama.png")
            return res.status(200).json({
                message: encodedimage
                });

          } catch (error) {
            if (error) {
                return res.status(200).json({
                        message: error
                        });
            }
             
          }
        
    });
   
};


export default { getEncodedImage};