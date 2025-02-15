const adminMiddleware = (req, res, next) => {
    // Assuming the user object is attached to the request during authentication
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ message: 'Access denied. Admin only.' });
    }
    next();
};

export default adminMiddleware;