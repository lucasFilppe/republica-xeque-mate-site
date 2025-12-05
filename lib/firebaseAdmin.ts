// lib/firebaseAdmin.ts
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fs from "fs";
import * as path from "path";

// Caminho absoluto para o JSON enviado por você
const serviceAccountPath = path.join(
  process.cwd(),
  "xeque-site-c35b2-firebase-adminsdk-fbsvc-0193dc8ae7.json"
);

const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const adminDB = getFirestore();
