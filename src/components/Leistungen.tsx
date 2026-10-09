import { keepTogether } from "@/lib/utils"
import { ServiceIcon } from "@/components/ServiceGlyph"
import { Container } from "@/components/Container"
import { site, services, type ServiceId } from "@/config/site"
import lasse from "@/images/lasse.webp"
import Image from "next/image"

// Computed at render (not module load) so the daily revalidate keeps it current.
function LasseAge() {
  return new Date().getFullYear() - site.lasseBirthYear
}

const bodies: Record<
  ServiceId,
  { left: React.ReactNode; right?: React.ReactNode }
> = {
  einzelberatung: {
    left: (
      <>
        <p>
          Sie sind mit sich im hier und jetzt unzufrieden, zögern eine wichtige
          Entscheidung heraus, haben das Gefühl auf der Stelle zu treten oder
          sehen sich gar einer augenscheinlich unüberwindbaren Hürde gegenüber.
        </p>
        <p>
          Was auch immer Ihr guter Grund ist, sich Unterstützung zu suchen: Ich
          möchte Ihnen dabei eine Wegbegleiterin sein, die Ihnen wann immer
          notwendig, Halt und Sicherheit bietet. Wagen Sie mit mir an Ihrer
          Seite Ihren ganz persönlichen Entwicklungsprozess und lernen Sie sich
          als wichtigstes Werkzeug Ihres Lebens anzuwenden.
        </p>
      </>
    ),
    right: (
      <p>
        Hierfür benötige ich von Ihnen die Offenheit und den Mut andere
        Perspektiven einzunehmen, Neues auszuprobieren, sowie vertraute
        Verhaltensmuster und Glaubenssätze zu durchbrechen.
      </p>
    ),
  },
  paarberatung: {
    left: (
      <>
        <p>
          Konfliktfähige Themen in einer Partnerschaft sind vielfältig: fehlende
          Wertschätzung, Familienplanung, Eifersucht, Sexualität,
          Freizeitgestaltung, Kommunikation oder Loyalität seien hier nur
          beispielhaft aufgelistet.
        </p>
        <p>
          Entscheidend ist, wie wir damit umgehen. Erhalten jene Themen Raum zur
          Besprechung, nach Möglichkeit sachlich, auf Augenhöhe, konstruktiv und
          nur unter Voraussetzung, dass beide gemeinsam an einer Lösung arbeiten
          wollen, ist eine glückliche Paarbindung möglich.
        </p>
        <p>
          Gelingt es den Partnern jedoch nicht ein adäquates Setting für
          Konflikte und Belastungen zu schaffen, eigenständig Lösungen zu finden
          und/oder entwickelt einer oder beide Personen körperliche/psychische
          Symptome, ist es ratsam sich beraterische/therapeutische Hilfe zu
          suchen.
        </p>
      </>
    ),
    right: (
      <>
        <p>
          Ich biete Ihnen einen neutralen, sicheren Rahmen und unterstütze Sie
          dabei sich achtsam und wohlwollend einander zuzuwenden. Wir erarbeiten
          gemeinsam Ideen und Strategien zur Bewältigung Ihrer Konflikte, sodass
          Sie wieder mit mehr Leichtigkeit, Freude und Genuss durchs Leben
          gehen.
        </p>
        <p>
          Hierfür benötige ich von Ihnen die Bereitschaft gemeinsam mit Ihrem
          Partner Veränderung zu schaffen und die Offenheit und Ehrlichkeit
          Gefühle und Absichten beim Namen zu nennen.
        </p>
      </>
    ),
  },
  familienberatung: {
    left: (
      <>
        <p>
          Das Leben in einer Familie ist immer wieder eine Achterbahnfahrt.
          Neben Erfüllung, Liebe und Glück, sehen sich die Mitglieder gleichsam
          Herausforderungen in Form von Alltagsstruktur, Bedürfnisbefriedigung,
          Elternschaft vs. Partnerschaft, Erziehung, Schule u.v.m. ausgesetzt,
          die einem bei Zeit auch über den Kopf wachsen können.
        </p>
        <p>
          Sind es auf den ersten Blick häufig Belastungen der Einzelnen, die
          Familien antreiben sich Hilfe zu holen, wirken jene sich doch immer
          auch auf das System aus.
        </p>
      </>
    ),
    right: (
      <>
        <p>
          Wagen Sie mit mir die Einnahme anderer Perspektiven, lernen Sie sich
          und Ihre Familie neu kennen, als Team wertzuschätzen, entwickeln Sie
          mit meiner Unterstützung einen ressourcenorientierten Blick auf das
          große Ganze und generieren Sie für Ihre Familie passende Lösungswege.
          Damit Sie sich endlich wieder auf das Wesentliche besinnen können.
        </p>
        <p>
          Oftmals zeigen schon kleinste Veränderungen{" "}
          <span className="font-semibold">GROßE</span> Wirkung!
        </p>
      </>
    ),
  },
  teamberatung: {
    left: (
      <>
        <p>
          So erleichternd, produktiv, gewinnbringend und erfüllend die Arbeit in
          einem Team sein kann, bedeutet jene doch auch eine wiederkehrende
          Herausforderung sich stetig neu zu justieren, aufeinander einzulassen
          und mit den Stärken und Schwächen eines jeden Einzelnen im Alltag zu
          agieren. Nicht immer gelingt es uns andere in ihrem so sein
          hinzunehmen. Augenscheinlich nichtige Meinungsverschiedenheiten
          scheinen plötzlich schier unmöglich lösungsorientiert und auf
          Augenhöhe ausgetragen zu werden. Oftmals gelingt es auch nicht mehr
          inhaltliche/organisatorische Themen, mit welchen wir womöglich noch
          emotional verbandelt sind, einmal wieder von der Meta-Ebene zu
          betrachten, uns aus unserer Befangenheit zu lösen und wieder eine
          wohlwollenden Blick auf die Dinge einzunehmen. Stattdessen fühlen wir
          uns anhaltend wie eine Marionette im Puppentheater.
        </p>
      </>
    ),
    right: (
      <>
        <p>Aber bedenken Sie: wir haben immer eine Wahl!</p>
        <p>
          Gern begleite ich Sie auf ihrem Weg zurück in ihre Kraft und
          Handlungsfähigkeit. Und wer weiß, vielleicht begegnet uns dabei ja gar
          ein Stück Wir-Gefühl...
        </p>
      </>
    ),
  },
  "tiergestuetzte-arbeit": {
    left: (
      <>
        <p>
          In meiner langjährigen Tätigkeit als Pädagogin im Betreuungsdienst und
          so auch heute darf ich immer wieder die außergewöhnliche Atmosphäre
          und Kraft der Anwesenheit von Tieren im Kontakt mit Menschen erleben.
          Oftmals reicht die bloße Präsenz schon aus, um den Fokus umzulenken,
          Anspannungen zu mildern und eine erste Brücke zum Klienten zu bauen.
        </p>
        <p>
          Mein tierischer Begleiter ist Lasse, mein <LasseAge /> Jahre alter
          Labrador. Je nach Zielsetzung nutze ich gern seine Kompetenz in meinen
          Sitzungen.
        </p>
        <p>
          Bitte haben Sie Verständnis dafür, dass die Teilnahme von Lasse einer
          gewissen Vorbereitung bedarf und mein Hund nach einer Sitzung Zeit und
          Ruhe benötigt, um sich hinreichend zu erholen sowie Erlebtes zu
          verarbeiten. Folglich kann es sein, dass nicht jedem Wunsch nach
          Teilnahme nachgekommen werden kann.
        </p>
      </>
    ),
    right: (
      <Image
        src={lasse}
        alt="Labrador Lasse, der Therapiebegleithund"
        sizes="(min-width: 1024px) 384px, 100vw"
        placeholder="blur"
        className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
      />
    ),
  },
  wiedereingliederung: {
    left: (
      <>
        <p>
          Aller (Wieder)-Anfang ist schwer. So groß auch die Freude endlich
          wieder im eigenen Bett zu schlafen, Freunde und Familie zu treffen,
          selbst zu wählen worauf ich heute Appetit habe, so groß auch der
          Respekt fernab von vorgegeben Strukturen nun wieder eigenständig
          meinen Alltag zu gestalten. Gerne begleite ich Sie ein Stück auf Ihrer
          Reise zurück in Ihr Leben.
        </p>
      </>
    ),
  },
}

export function ServiceSection({ id }: { id: ServiceId }) {
  const service = services.find((s) => s.id === id)!
  const { left, right } = bodies[id]
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titel`}
      className="hairline-b section-y last:border-b-0"
    >
      <Container>
        <ServiceIcon id={id} className="size-14 text-fir" />
        <h2 id={`${id}-titel`} className="mt-4 text-title">
          {keepTogether(service.name)}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          {service.heading}
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-prose space-y-4">{left}</div>
          {right && <div className="max-w-prose space-y-4">{right}</div>}
        </div>
      </Container>
    </section>
  )
}
