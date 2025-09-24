import multer, { FileFilterCallback } from "multer"
import path from "path"
import { Request } from "express"

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/") // save in uploads folder (root)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) // unique filename
  },
})

// optional file filter (accept only images)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true)
  } else {
    cb(new Error("Only image files allowed!"))
  }
}

export const upload = multer({ storage, fileFilter })
