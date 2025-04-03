import { connectDB } from '../../DB/connection.js';
import categoriesRouter from './category/category.router.js';
import subcategoriesRouter from './subCategory/subCategory.router.js';
import productRouter from './product/product.router.js';
import authRouter from './auth/auth.router.js';
import cartRouter from './cart/cart.router.js';
import orderRouter from './order/order.router.js';
import couponRouter from './coupon/coupon.router.js';
import userRouter from './user/user.router.js';
import reviewRouter from './review/review.router.js';
import cors from 'cors';
import { AppError, globalhandleError } from '../utils/AppError.js';
export const initApp = (app, express) => {
    connectDB();
    app.use(cors());
    app.use(express.json());
    app.get('/', (req, res) => {
        return res.status(200).json({ message: 'Welcome to the E-commerce' });
    });
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/categories', categoriesRouter);
    app.use('/subCategories', subcategoriesRouter);
    app.use('/products', productRouter);
    app.use('/cart', cartRouter);
    app.use('/order', orderRouter);
    app.use('/coupon', couponRouter);
    app.use('/review', reviewRouter);
    // app.use('*', (req, res, next) => {
    //     return next(new AppError('Page Not Found', 404));
    // });
    app.use(globalhandleError);

}