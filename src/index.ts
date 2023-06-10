import path from 'path';
import fs from 'fs';
import { utimes } from 'utimes';

const folderPath = path.join(__dirname, '../pictures');
const pastTime = new Date('2023-01-03 14:52:00'); // Replace with time from your camera. You need to know it.

const currentTime = new Date('2023-06-10 22:11:00'); // Replace with current time. It should be in same minutes after you know time from your camera.
const timeDifference = currentTime.getTime() - pastTime.getTime();

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    fs.stat(filePath, (statErr, stats) => {
      if (statErr) {
        console.error(`Error getting file stats for ${filePath}:`, statErr);
        return;
      }

      const updatedCtime = new Date(stats.ctime.getTime() + timeDifference);
      const updatedStats = {
        ...stats,
        ctime: updatedCtime,
      };

      utimes(filePath, {
        btime: updatedStats.ctime.getTime(),
        mtime: undefined,
        atime: undefined
      }, function(error) {
        if (error) {
          console.error(`Error updating file times for ${filePath}:`, error);
        } else {
          console.log(`Updated creation time for ${filePath}`);
        }
      });
    });
  });
});
