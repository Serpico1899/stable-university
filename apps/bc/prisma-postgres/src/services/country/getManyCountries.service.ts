import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getManyCountries = async ( limit=10, skip=0) => {
	return await prisma.country.findMany({
		take:limit,
		skip
	});	
}

export default getManyCountries