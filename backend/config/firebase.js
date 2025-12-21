import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔑 Detect service account key path
const renderSecretPath = "/etc/secrets/serviceAccountKey.json";
const localPath = path.join(__dirname, "serviceAccountKey.json");

const serviceAccountPath = fs.existsSync(renderSecretPath)
  ? renderSecretPath
  : localPath;

if (!fs.existsSync(serviceAccountPath)) {
  throw new Error("❌ Missing serviceAccountKey.json file");
}

const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
