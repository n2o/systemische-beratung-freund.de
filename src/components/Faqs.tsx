import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-faqs.jpg"
import Image from "next/image"

const faqs = [
  {
    question: "Benötige ich eine Überweisung des Arztes?",
    answer:
      "Eine ärztliche Verordnung ist für die therapeutische Behandlung erforderlich. Selbstverständlich können Sie alle Leistungen unserer Praxis auch privat zahlen und uns ohne den Kontakt zum Arzt aufsuchen.",
  },
  {
    question: "Übernimmt meine Krankenkasse die Kosten?",
    answer:
      "Wenn Sie eine Verordnung vom Arzt vorlegen, übernehmen die gesetzlichen und privaten Krankenkassen die Kosten. Der Eigenanteil, den Sie leisten müssen, variiert je nach Kasse und Verordnung. Seit dem 01.01.2004 ist es vorgeschrieben, dass gesetzlich Versicherte einen Eigenanteil von 10% pro Rezept selbst zahlen müssen. Kinder und Jugendliche sind von Zuzahlungen befreit. Weitere Fragen dazu beantwortet Ihnen Ihre Krankenkasse.",
  },
  {
    question: "Wie lange ist mein Rezept gültig?",
    answer:
      "Sind Sie gesetzlich versichert, muss das Rezept innerhalb von 28 Tagen nach Ausstellungsdatum angefangen werden. Sie sollten also so bald wie möglich einen Termin vereinbaren. Die Behandlung sollte nicht länger als 14 Tage unterbrochen werden, da die Verordnung ansonsten ungültig wird.",
  },
  {
    question: "Wer entscheidet, wie viele Rezepte ich bekomme?",
    answer:
      "Wann und wie viele Verordnungen Ihnen zustehen, richtet sich nach der Diagnose des Arztes, sowie nach den Vorgaben des Heilmittelkataloges, nachzulesen unter www.heilmittelkatalog.de",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer:
      "Die Dauer der Behandlung hängt von dem vom Arzt verordneten Heilmittel ab.",
  },
  {
    question: "Was muss ich zur Behandlung mitbringen?",
    answer:
      "Beim ersten Termin bringen Sie bitte die ärztliche Verordnung, Ihre Versichertenkarte und ein großes Handtuch oder Spannbettlaken mit. Bitte tragen Sie bequeme Kleidung und kommen pünktlich zum Termin.",
  },
  {
    question: "Was ist, wenn ich meinen Termin nicht einhalten kann?",
    answer:
      "Teilen Sie uns so bald wie möglich, spätestens 24 Stunden vor Behandlungsbeginn, mit, wenn Sie aus einem wichtigen Grund Ihren Termin absagen müssen. Wir können so anderen Patienten, die auf einen Termin warten, die frei gewordene Zeit anbieten. Sollten Sie ohne Absage den Termin verfallen lassen, müssen wir Ihnen pauschal einen Betrag von 25 € in Rechnung stellen.",
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 sm:py-20 md:py-20"
    >
      <Image
        className="absolute top-0 left-1/2 hidden max-w-none translate-x-[-30%] -translate-y-1/4 md:block"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-0 max-w-2xl md:mx-auto md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="my-6 text-lg tracking-tight text-slate-700">
            Hier finden Sie eine Auswahl der häufig gestellten Fragen. Sollten
            Sie weitere Fragen haben, zögern Sie nicht uns zu kontaktieren.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, faqIndex) => (
            <div key={faqIndex} className="pb-4">
              <h3 className="font-display text-lg leading-7 text-slate-900">
                {faq.question}
              </h3>
              <p className="text-md mt-4 text-justify text-slate-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
