const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const count = await prisma.reference.count();
  if (!count) {
    await prisma.reference.createMany({
      data: [
        { title: "Maison Aurelia", tag: "Marka & Site", blurb: "Şampanya tonlarıyla sıcak, davetkar bir deneyim.", isPublished: true },
        { title: "Vellum & Co.", tag: "Kurumsal web", blurb: "Filigran dokular, ölçülü tipografi; sakin lüks.", isPublished: true },
        { title: "Blue Barony", tag: "Rezervasyon platformu", blurb: "Safir vurgu, sürtünmesiz akış.", isPublished: false }
      ]
    });
  }
  console.log("Seed ready");
}
main().finally(()=>prisma.$disconnect());
