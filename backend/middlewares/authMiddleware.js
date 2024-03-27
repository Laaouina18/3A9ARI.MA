import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const BearerToken = req.headers.authorization;
    if (BearerToken) {
        const token = BearerToken.split("Bearer ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
              throw new err;
            }
            req.user = decoded;
            next();
        });
    }else {
        throw new Error("no token");
    }
};

const isClient =async (req, res, next) => {
	if (req.user && req.user.role === 'client') {
	  return next();
	} else {
	  return res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource en tant que client." });
	}
  };
  
 
  const isOwner = async(req, res, next) => {
	console.log("hi user",req.user)
	if (req.user && req.user.role === 'Owner') {
		console.log("hi user",req.user)
	  return next(); 
	} else {
	  return res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource en tant que propriétaire." });
	}
  };
  
export { authMiddleware ,isClient,isOwner};