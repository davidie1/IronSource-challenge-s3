import { Router, Application } from 'express';
import bodyParser from 'body-parser';
import multer, {diskStorage} from 'multer';

const storage = diskStorage({
    destination: (req, file, cb) => {
      cb(null, "files");
    },
    // filename: (req: Request, file, cb) => {
    //   cb(null, `${req.headers['x-auth-token']}_${file.originalname}`);
    // }
});
const multerUpload = multer({ storage });

export class API {
    constructor(expressApp: Application) {
        console.log('API is about to register routes');
        const router = Router();
        this.registerMiddlewares(expressApp);
        expressApp.use('/api', router);
        this.listenToRoutes(router);
    }

    public registerMiddlewares(expressApp: Application) {
        expressApp.use(
            bodyParser.urlencoded({
                extended: true
            })
        );
        expressApp.use(bodyParser.json());
    }

    public listenToRoutes(router: Router) {
        router.post('/files', multerUpload.single(), async (req, res) => {
        });
    }
}