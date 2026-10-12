export default function ProjectVisual({
  kind,
}: {
  kind: "mobiverse" | "diamond" | "dailyos";
}) {
  if (kind === "mobiverse")
    return (
      <div
        className="project-visual commerce-visual"
        role="img"
        aria-label="Mobiverse concept artwork: sculptural phones and a browse-to-payment workflow, not an application screenshot"
      >
        <div className="visual-top">
          <span className="visual-brand">
            m<span>◆</span>
          </span>
          <span>MOBIVERSE / COMMERCE</span>
        </div>
        <div className="commerce-title">
          A whole world.
          <br />
          <em>In your pocket.</em>
        </div>
        <div className="phones" aria-hidden="true">
          <div className="phone phone-back">
            <div className="camera">
              <i />
              <i />
              <i />
              <b />
            </div>
            <span>m.</span>
          </div>
          <div className="phone phone-front">
            <div className="island" />
            <div className="phone-orbit" />
            <span>hello.</span>
            <small>GOOD THINGS CONNECT.</small>
          </div>
        </div>
        <div className="visual-bottom">
          <span>
            DISCOVER <b>→</b> CHECKOUT <b>→</b> YOURS
          </span>
          <span>CONCEPT ARTWORK ↗</span>
        </div>
      </div>
    );
  if (kind === "diamond")
    return (
      <div
        className="project-visual production-visual"
        role="img"
        aria-label="Diamond Pappadam workflow illustration: production entry, admin approval, and salary ledger"
      >
        <div className="visual-top">
          <span className="diamond-mark">◇</span>
          <span>DIAMOND / OPERATIONS</span>
        </div>
        <div className="production-title">
          Good work.
          <br />
          <em>Better records.</em>
        </div>
        <div className="workflow">
          <div>
            <span>01 / EMPLOYEE</span>
            <strong>Record production</strong>
            <i>Quantity · Category · Rate</i>
          </div>
          <b aria-hidden="true">↓</b>
          <div>
            <span>02 / ADMIN</span>
            <strong>Review & approve</strong>
            <i>Every entry, accounted for.</i>
          </div>
          <b aria-hidden="true">↓</b>
          <div>
            <span>03 / LEDGER</span>
            <strong>Keep the balance</strong>
            <i>Earned − Paid = Balance</i>
          </div>
        </div>
        <div className="visual-bottom">
          <span>PRODUCTION → PEOPLE → PAYROLL</span>
          <span>WORKFLOW STUDY ↗</span>
        </div>
      </div>
    );
  return (
    <div
      className="project-visual planner-visual"
      role="img"
      aria-label="DailyOS conceptual artwork: a seven-day routine with recurring tasks, not an application screenshot"
    >
      <div className="visual-top">
        <span className="visual-brand">
          d<span>◒</span>
        </span>
        <span>DAILYOS / EVERYDAY PROGRESS</span>
      </div>
      <div className="planner-title">
        Small steps.
        <br />
        <em>On repeat.</em>
      </div>
      <div className="week-art" aria-hidden="true">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={i} className={i === 3 ? "today" : ""}>
            <span>{day}</span>
            <b>{i < 3 ? "✓" : i === 3 ? "↗" : "·"}</b>
          </div>
        ))}
      </div>
      <div className="repeat-art" aria-hidden="true">
        ↻
      </div>
      <div className="visual-bottom">
        <span>A LITTLE BETTER, EVERY DAY.</span>
        <span>CONCEPT ARTWORK ↗</span>
      </div>
    </div>
  );
}
