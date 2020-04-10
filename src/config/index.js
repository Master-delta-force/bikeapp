import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    firebase: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrCu7KELBrpCcw\nnt38FieIj1oSikKlQdIUPfmj4P3ub28mQSDFzXMh6rzYNJUXHyst4nRwcusLHIRI\ng7r6XlY/015lS77HNz2kc+WD48MTZjnZ/a0sgWk3OdFfdsAiB6MAMyWy5RocRuHf\nE1h5CpQvHv0Bj60clDn8QWz8ocbJA1KgxwebyKp+pvDUirhN2kTY12k2hjteSfPu\n5E80C2xlUuzhzo2KUTRv9l3LAl5Cz1KxsRFENLA0rz/at9zC3XFgSfxg98wN4oMJ\nRuTose3w9I1s+tKj3D5+YjBW9zueknME7XZwVchfRPRJh5iPVRdYTSgO1zQ8O3Y8\nKif1vvbhAgMBAAECggEACv0kU0oYM4oz1F1YkLIRryXamRdV6c0dRJyotb0mQ1PY\ndcI4a0zkSTkOEevq6jXf7c4/Qdw4OpoF66y+7gfyjZ40Udi4dI8ZgD/L7pnK9iua\nquUv44ya6GfoCjSUantIHyKqGOC8OTXanBzfkcM6uv5ILfn/mrbxNMI1UNPJ9C8O\nC96dr7g6I/AlrznQdMUtf3iqOU57KeNEbBbTHQDwtBoIbW1Bm+Kzvd+PFhqB/OCI\nqMTJchD7zL6LHj4Cog+I434pHkL2ZULVMnfoUptjkZHZWICoEQrhCh8vFI315Szc\nW4GeQ3HEdXpKK77kuupMK/DT4NHwXC2c5UimvGB3cwKBgQDbx6Ypfpdx9WrfceoQ\ndSYPBk6VCcZC++zqKV9Ar5ZE+fCIWQ/0RlujmQY7wTxtmqfBcyW92hPcBaXuTDjR\nuPLvsxHrrA9Pd7zL8WCrrX/T39ci8gdRARnM/XtLK1kOluH+JpQxRBDW7ufHeYkC\nsB2X3ljXnGQBZAnO3kz0ieP8ewKBgQDHOxksSG01fGsuRe4LIN2o6JCRqTIf8V7A\ni9XorfslOmUwEN2LPgrt659NIsGl6OfYqpb8iiyh24lfXxBspkEHUG9D58NEbHw0\nz2s8sitP2OjzSkfFgd6uHxdHrtKWwO620Ixq1b+dH9GZRzhY5pozvCp/lrqBqkLL\nhM3JagThUwKBgEtdHdxyvWnldx1iCZpVIZTbW8z9ig/kJWxyfWhIDaZfcpy+tZrV\nGY1y5tFMxPTsqIPMgW+lvVOgWDLrzjwUSLHrXMTMvn9IluP0RGr6VrAHvNUN23Zq\ngzdo4IN5PNOk55/oCL8QERoy2CXtxg62557xLtPYm+5iKH7YedkNA7HLAoGBAMXj\nHnrMqaSxoygAD5QAHgryjP4RR5dQwKORgXOus8DjgrQ+XD887dAp9D3CowOvFfIw\nZu4KNJDEJWuUWhUBAaBJNWsGXf6tnqU5zLMp6TlTIvbcNfOorkzW1uG9dLCGi9UL\nyh0nmD5x51dO1VoAGvP+F1xJk5DNU7EghOJlKtm/AoGBALc9TWp/TvaX/XkkBdP1\neBy21n8k1FJuQhixJy1bV8QsoQls86B06HQ3l6eJ1KRHNCEhUSZ88oofufphbtJN\n9H0FcNBetEWz7pjveS4Ku8s3l+LMFDDc0AeEYghiVmO0zIBjA9r0Fv9JL1i6BvAu\nWrNaaClUa0wbgFF+ThtrCRQl\n-----END PRIVATE KEY-----\n",
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    },
    db: {
        url: process.env.DB_URL
    }
}
