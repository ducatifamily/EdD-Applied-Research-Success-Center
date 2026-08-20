const STORAGE_KEY = 'eddClaxtonSuccessCenter.v1';

const courses = {
  ED780: {
    code: 'ED780',
    title: 'Creativity, Innovation, and Intrapreneurship in Education',
    status: 'active',
    focus: 'Build the literature and topic foundation for the Applied Research Project using the Claxton Chapter 2 structure while refining feasibility, the innovation focus, the literature-supported gap, and an emerging research direction.',
    meta: [
      'Chapter 2 development',
      'Topic refinement',
      'RPC checkpoints',
      'Committee review in Unit 9'
    ],
    notices: [
      {
        type: 'info',
        title: 'Claxton Chapter 2 structure',
        text: 'Use the four-part structure: Overview → Narrative Review → Theoretical Framework → Summary. The Narrative Review should synthesize by themes rather than read like an annotated bibliography.'
      },
      {
        type: 'warning',
        title: 'Methods-in-the-literature is not final methodology selection',
        text: 'ED780 asks you to notice methodological patterns in prior research. Do not treat those observations as a final Chapter 3 design decision.'
      }
    ],
    roadmap: [
      [
        '1',
        'Aligning Innovation with Inquiry',
        'Establish the broad innovation-focused problem direction.'
      ],
      [
        '2',
        'Grounding the Problem in Literature',
        'Plan literature-driven problem questions and an early search strategy.'
      ],
      [
        '3',
        'Preliminary Topic Readiness',
        'First formal RPC checkpoint: topic direction, innovation focus, feasibility, and early literature.',
        'RPC checkpoint'
      ],
      [
        '4',
        'History, Context, and Evolution',
        'Develop the historical and contextual literature around the problem.'
      ],
      [
        '5',
        'Constructs, Barriers, and Prior Solutions',
        'Synthesize major concepts, causes/barriers, and prior interventions.'
      ],
      [
        '6',
        'Findings, Gaps, and Methods in Literature',
        'Identify the strongest gap and examine how related studies were conducted.'
      ],
      [
        '7',
        'Framework, Synthesis, and Alignment',
        'Second formal RPC checkpoint: deeper Chapter 2 development, gap, framework, and readiness.',
        'RPC checkpoint'
      ],
      [
        '8',
        'Critical Alignment and Methodology Readiness',
        'Pressure-test the topic, framework, feasibility, ethics, and future design considerations.'
      ],
      [
        '9',
        'Chapter 2 + Topic Committee Review',
        'Submit the complete Chapter 2 draft and formal topic approval submission for committee review.',
        'Committee review'
      ],
      [
        '10',
        'Prepare for Research Design',
        'Use feedback to continue Chapter 2 revision and research-question development for the next phase.'
      ]
    ],
    groups: [
      {
        id: 'topic',
        title: 'Unit 2 · Literature-Driven Problem Planning',
        items: [
          'I selected a viable topic from my feasibility work and can identify the specific educational context or site type.',
          'I can name the primary stakeholders and explain their roles in relation to the problem.',
          'I can identify concrete possible evidence that the problem exists, such as data, reports, documented outcomes, or observable indicators.',
          'I have developed 4–6 focused literature-driven problem questions that address history/evolution, contributing causes, prior solutions, and gaps.',
          'I have identified 8–10 specific search terms or phrases rather than relying only on broad single-word topics.',
          'I have identified 2–3 appropriate databases or search locations and can explain why they fit the topic.',
          'My source-prioritization plan considers factors such as currency, peer-review status, relevance, and source type.',
          'I have 2–3 specific feedback questions about areas of uncertainty in my topic, search strategy, or feasibility.'
        ]
      },
      {
        id: 'chapter2',
        title: 'Claxton Chapter 2 Build Check',
        items: [
          'Overview is present and previews the literature review purpose and major areas.',
          'Narrative Review is organized by coherent concepts/themes rather than article-by-article summaries.',
          'The literature explains what is known, where evidence agrees or conflicts, and what remains unresolved.',
          'The strongest literature-supported gap or practical need is identifiable.',
          'Theoretical Framework is named, explained, justified, and connected to the topic and gap.',
          'Summary synthesizes the main themes, strongest gap, framework, and innovation connection.'
        ]
      },
      {
        id: 'u3',
        title: 'Unit 3 · Preliminary Topic Readiness',
        items: [
          'My preliminary topic is focused, grounded in a specific educational context/site type, and connected to an innovation or improvement focus.',
          'I can distinguish the current practice/problem from what the innovation or improvement effort is intended to change.',
          'I have identified primary stakeholders and early evidence sources that help confirm the problem exists.',
          'I have examined feasibility across at least three relevant dimensions, such as site access, data availability, timeline, ethics, or resources.',
          'My literature-driven problem questions cover problem context/history, contributing causes, prior solutions, and existing gaps.',
          'My source-search plan includes 8–10 specific terms, 2–3 databases with justification, and meaningful inclusion/exclusion criteria.',
          'I have identified five current peer-reviewed scholarly sources that clearly align with the emerging topic and problem.',
          'I have 2–3 focused questions for RPC feedback about the topic, design direction, feasibility, or search strategy.'
        ]
      },
      {
        id: 'u7',
        title: 'Unit 7 · Framework & Chapter 2 Summary Readiness',
        items: [
          'I identify a specific theoretical framework or model by name and accurately describe its origin, development, and key concepts.',
          'The framework discussion is supported by at least two peer-reviewed scholarly sources.',
          'I explicitly connect the framework to the innovation-focused topic, specific Chapter 2 themes/findings, and the future research direction.',
          'My Chapter 2 Summary synthesizes major literature themes rather than simply restating earlier sections.',
          'The Summary identifies a specific literature-supported gap and explains why the gap matters for practice.',
          'The gap is connected to both the innovation focus and the theoretical framework.',
          'I summarize methodological patterns across at least three reviewed studies, including designs, instruments/data sources, participants/settings, and recurring limitations.',
          'My transition explains how the literature themes, gap, framework, and methodological patterns support the next phase of the research project.'
        ]
      },
      {
        id: 'u9',
        title: 'Unit 9 · Chapter 2 & Formal Topic Approval Readiness',
        items: [
          'The Chapter 2 Overview states the chapter purpose, identifies the major bodies of literature in the order presented, and explains the logic of that organization.',
          'The Overview explicitly connects the scope of the literature review to the applied problem and innovation focus.',
          'The Narrative Review is organized around the rubric-required literature areas/themes—such as history, constructs, causes, prior solutions, and gaps—and does not rely on source-by-source summaries.',
          'Within themes, sources are compared, contrasted, and interpreted so the literature builds a coherent understanding of the problem.',
          'The theoretical framework is mapped to specific literature themes or problem dimensions rather than being discussed as a disconnected section.',
          'The literature builds an evidence-supported argument for a specific gap rather than simply stating that a gap exists.',
          'The transition explains how the gap and framework together support the research design and methodology work that follows.',
          'The formal topic approval submission includes the four rubric elements: evidence-grounded problem statement, justified gap, research question that addresses the gap, and study-specific feasibility/ethics considerations.',
          'Feasibility and ethics considerations address relevant issues such as site access, participant considerations, timeline, and IRB implications.',
          'APA citations, references, headings, formatting, scholarly tone, and tables/figures if used have been reviewed against the assignment rubric.'
        ]
      }
    ],

    resources: [
      [
        'Syllabus',
        'ED780 Course Syllabus',
        'Course expectations, outcomes, grading, policies, and program contacts.',
        'resources/ED780/ED780_Syllabus.pdf'
      ],
      [
        'Rubrics',
        'ED780 Assignment Rubrics',
        'Rubrics for the major ED780 assignments and journal work, including Units 2, 3, 4, 7, and 9.',
        'resources/ED780/ED780_Assignment_Rubrics.docx'
      ],
      [
        'Toolkit',
        'ED780 ARPP Success Toolkit',
        'Program support resources for topic, research questions, Chapter 2, and methodology awareness.',
        'resources/ED780/ED780_ARPP_Success_Toolkit.docx'
      ],
      [
        'Assignment',
        'Unit 2 Literature-Driven Problem Question Planning',
        'Use the literature to test the selected topic and plan an early source-search strategy.',
        'resources/ED780/Unit_2_Literature_Driven_Problem_Question_Planning.html'
      ],
      [
        'Worksheet',
        'Methods-in-the-Literature Table',
        'Examine methods, participants, settings, instruments/data sources, findings, gaps, and limitations across related studies.',
        'resources/ED780/ED780_Methods_in_the_Literature_Table.docx'
      ],
      [
        'Form',
        'Methodology Justification Form',
        'A later-stage alignment form included with ED780 resources; use only as directed by the course.',
        'resources/ED780/Methodology_Justification_Form.docx'
      ]
    ]
  },

  ED822: {
    code: 'ED822',
    title: 'Applied Research Project II: Research Methodology and Design',
    status: 'active',
    focus: 'Develop Chapter 3: Procedures using the Claxton-based structure. The emphasis is on alignment, feasible and defensible procedures, participants/data sources, instruments/protocols, rigor, ethical safeguards, data protection, and analysis alignment.',
    meta: [
      'Chapter 3: Procedures',
      'Build-As-You-Go',
      'Checkpoint 1 · Unit 3',
      'Checkpoint 2 · Unit 6',
      'Full Committee Review · Unit 8'
    ],
    notices: [
      {
        type: 'info',
        title: 'Review timing',
        text: 'Checkpoint 1 and Checkpoint 2 each use an approximately 7-day developmental review period. The Unit 8 Full Committee Review uses an approximately 10-day review period.'
      },
      {
        type: 'warning',
        title: 'IRB awareness in ED822 is preparatory',
        text: 'Units 7 and 9 introduce participant protections and possible IRB pathways, but the course materials explicitly state that this is not a formal IRB pathway determination or protocol submission. Formal protocol/IRB development continues in ED825.'
      },
      {
        type: 'info',
        title: 'Primary data requirement',
        text: 'Document analysis may be used as a secondary procedure but should not serve as the primary data-collection procedure. The primary procedure is expected to generate original researcher-directed data.'
      }
    ],
    roadmap: [
      [
        '1',
        'Develop the Chapter 3 Overview',
        'Build the concise purpose → problem → procedure-preview opening.'
      ],
      [
        '2',
        'First Data Collection Method Procedures',
        'Identify the first method, participants/data sources, tool, steps, access, and initial safeguards.'
      ],
      [
        '3',
        'Additional Procedures + Checkpoint 1',
        'Evaluate one, two, or three procedures for alignment, necessity, feasibility, and coherence.',
        'Checkpoint 1 · ~7 days'
      ],
      [
        '4',
        'Methodological Rigor and Ethical Readiness',
        'Integrate credibility/trustworthiness or validity/reliability, ethics, data security, retention, and analysis alignment into procedures.'
      ],
      [
        '5',
        'Procedural Coherence and Chapter Integration',
        'Strengthen transitions, completeness, triangulation where appropriate, and the chapter as one coherent methodology plan.'
      ],
      [
        '6',
        'Checkpoint 2: Complete Procedures Chapter',
        'Submit Chapter 3 Overview, procedures, Summary, current Chapters 1–2, references, and APA review.',
        'Checkpoint 2 · ~7 days'
      ],
      [
        '7',
        'IRB Foundations and Participant Protection',
        'Build awareness of the IRB role, participant protections, consent, confidentiality, and data security.'
      ],
      [
        '8',
        'Full Committee Review',
        'Submit Chapters 1–3 as one complete document for comprehensive review.',
        'Full review · ~10 days'
      ],
      [
        '9',
        'Explore IRB Review Pathways',
        'Use current Purdue Global IRB resources to consider Human Research Determination, Exempt, or Expedited pathways without treating the exercise as a formal determination.'
      ],
      [
        '10',
        'ED825 Readiness and Revision Planning',
        'Organize feedback and identify priorities for paper revision, protocol development, participant protections, consent/information sheets, data security, and IRB preparation.'
      ]
    ],
    groups: [
      {
        id: 'overview',
        title: 'Chapter 3 Overview Self-Check',
        items: [
          'The first sentence states the purpose of the study.',
          'The second sentence states the problem being addressed.',
          'The final sentence briefly introduces the major procedure headings.',
          'The Overview remains concise and does not explain participants, instruments, data collection steps, or analysis in detail.',
          'The procedural direction remains consistent with the central research question even if the question is not repeated in the paragraph.',
          'The paragraph maintains scholarly tone and the required course format.'
        ]
      },
      {
        id: 'procedure',
        title: 'Procedure Planning & Alignment',
        items: [
          'The data collection method is named precisely and has a defensible rationale.',
          'The procedure clearly contributes data needed to answer the central research question.',
          'Participants, data sources, documents, artifacts, or setting are identified and justified as applicable.',
          'The instrument, protocol, survey, interview guide, observation tool, questionnaire, or document-review tool is clearly identified.',
          'Data collection steps explain what the researcher will do, what participants/data sources will provide, and how the process will be organized.',
          'Instrument/tool development, selection, adaptation, permission, expert review, pilot/field testing, or quality evidence is addressed as appropriate.',
          'Required site, participant, data-source, and instrument permissions are considered.',
          'The procedure is realistic and manageable within the Applied Research Project timeline and scope.'
        ]
      },
      {
        id: 'cp1',
        title: 'Checkpoint 1 · Foundation & Procedures Alignment',
        items: [
          'Current Chapter 1 is included.',
          'Current Chapter 2 and references are included.',
          'Chapter 3 Overview is included.',
          'First Data Collection Method Procedures are developed enough for focused review.',
          'Additional procedure sections are included if applicable, or a one-procedure rationale is clear.',
          'Problem → purpose → central research question → procedures → data collected forms a coherent alignment chain.',
          'Participants/data sources and instruments/protocols are identified and feasible.',
          'APA and scholarly writing have been reviewed before submission.'
        ]
      },
      {
        id: 'rigor',
        title: 'Rigor, Ethics, Data Protection & Analysis',
        items: [
          'Credibility/trustworthiness or validity/reliability is integrated into the relevant procedure rather than isolated as a generic statement.',
          'Voluntary participation and participant protections are addressed where applicable.',
          'Confidentiality is explained; anonymity is claimed only when it is genuinely possible.',
          'Data storage location, access limits, security, retention, and secure destruction are addressed.',
          'Permissions and site access align with the planned procedure.',
          'Each procedure produces the type of data required for the planned analysis.',
          'The planned analysis is clearly connected back to the central research question.',
          'Ethical safeguards and data protections are integrated within the actual procedures.'
        ]
      },
      {
        id: 'cp2',
        title: 'Checkpoint 2 · Complete Procedures Chapter',
        items: [
          'Chapter 3 includes a concise Overview, complete procedure sections, and a Summary that provides closure.',
          'Procedures work together as one coherent methodology plan.',
          'Problem, purpose, central research question, procedures, participants/data sources, and data collected remain aligned.',
          'Methodological rigor and analysis alignment are clear for each procedure.',
          'Participant protections, confidentiality, data security, permissions, retention, and safeguards are integrated appropriately.',
          'Transitions and connections make Chapter 3 read as one chapter rather than separate procedure descriptions.',
          'Current Chapters 1–2 and references are included to support alignment review.',
          'APA style, APA formatting, scholarly tone, and terminology consistency have been reviewed.'
        ]
      },
      {
        id: 'full',
        title: 'Unit 8 · Full Committee Review Readiness',
        items: [
          'Chapters 1–3 and references are submitted as one complete document.',
          'The problem, purpose, exact central research question, methodology, procedures, participants/data sources, and data to be collected are aligned across chapters.',
          'Chapter 3 procedures are clear, feasible, specific, coherent, and defensible.',
          'Instruments/protocols and analysis plans are sufficiently detailed for committee review.',
          'Participant protections, consent/information-sheet considerations, confidentiality/anonymity, data security, permissions, retention, and ethical safeguards are addressed.',
          'Prior Checkpoint 1 and Checkpoint 2 feedback has been meaningfully considered.',
          'Remaining revision needs are identifiable and manageable for transition to ED825.',
          'APA citations/references, formatting, organization, and scholarly writing have been reviewed.'
        ]
      },
      {
        id: 'transition',
        title: 'ED822 → ED825 Transition',
        items: [
          'I have retained committee/RPC/faculty feedback so it can be organized in ED825.',
          'I can identify the highest-priority alignment or methodology revisions still needed.',
          'Participant protections and consent/information-sheet needs are identifiable.',
          'Recruitment materials and site-permission needs are identifiable.',
          'The data security and retention plan is specific enough to be refined into protocol materials.',
          'The paper, participants, recruitment plan, instruments, procedures, confidentiality protections, and data-security plan remain aligned.',
          'I understand that major design/procedure changes should be discussed with faculty/RPC because they may affect protocol and IRB readiness.'
        ]
      }
    ],
    resources: [
      [
        'Syllabus',
        'ED822 Course Syllabus',
        'Course purpose, learning outcomes, grading structure, policies, and contact roles.',
        'resources/ED822/ED822_Syllabus.pdf'
      ],
      [
        'Guide',
        'How to Write the Chapter 3 Overview',
        'Purpose → problem → procedure-preview guidance for the Claxton-based Overview.',
        'resources/ED822/How_to_Write_Chapter_3_Overview.docx'
      ],
      [
        'Checklist',
        'Chapter 3 Overview Checklist',
        'Quick self-check for the required Overview structure.',
        'resources/ED822/Chapter_3_Overview_Checklist.docx'
      ],
      [
        'Rubric',
        'Unit 3 Checkpoint 1 Rubric',
        'Submission completeness, procedural alignment, procedures, participants/data sources/instruments/feasibility, writing, and APA.',
        'resources/ED822/Unit_3_Checkpoint_1_Rubric.docx'
      ],
      [
        'Rubric',
        'Unit 6 Checkpoint 2 Rubric',
        'Complete Procedures chapter, coherence, rigor/analysis, ethical readiness, writing, and APA.',
        'resources/ED822/Unit_6_Checkpoint_2_Rubric.docx'
      ],
      [
        'Review',
        'Unit 8 Full Committee Review',
        'Full Chapters 1–3 review expectations and ED825 readiness focus.',
        'resources/ED822/Unit_8_Full_Committee_Review.docx'
      ],
      [
        'Resource Guide',
        'ED822 Core Course Resources',
        'Guide to Chapter 3 tools, method-specific resources, rigor/ethics, integration, summary, and checkpoint readiness.',
        'resources/ED822/ED822_Core_Course_Resources.docx'
      ],
      [
        'Alignment',
        'Claxton Applied Research Alignment Checklist',
        'Cross-chapter alignment checklist spanning the Claxton-based Applied Research Project.',
        'resources/ED822/Claxton_Applied_Research_Alignment_Checklist.docx'
      ]
    ]
  }
};

const sequence = [
  [
    'ED780',
    'active',
    'Topic + Chapter 2',
    'Literature foundation, gap, framework, topic refinement, and committee review.'
  ],
  [
    'ED810',
    'pending',
    'Coming Soon',
    'Course materials will be added after the updated Claxton-based information is supplied.'
  ],
  [
    'ED822',
    'active',
    'Chapter 3 Procedures',
    'Methodology, procedures, checkpoints, ethics, analysis alignment, and full committee review.'
  ],
  [
    'ED825',
    'pending',
    'Coming Soon',
    'Reserved for the updated protocol/IRB and revision workflow.'
  ],
  [
    'ED830',
    'pending',
    'Coming Soon',
    'Reserved for the updated research implementation and findings phase.'
  ],
  [
    'ED840',
    'pending',
    'Coming Soon',
    'Reserved for completion, recommendations, and defense.'
  ]
];

function getState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

let saved = getState();

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function homeView() {
  const cards = sequence
    .map(
      ([code, status, title, desc]) => `
        <article class="course-card ${status}">
          <div class="code">${code}</div>

          <span class="status ${status}">
            ${status === 'active' ? 'ACTIVE' : 'COMING SOON'}
          </span>

          <h3>${title}</h3>

          <p>${desc}</p>

          <button
            type="button"
            ${
              status === 'active'
                ? `data-open-course="${code}"`
                : 'disabled'
            }
          >
            ${
              status === 'active'
                ? 'Open course center →'
                : 'Pending'
            }
          </button>
        </article>
      `
    )
    .join('');

  return `
    <section class="hero">
      <div class="shell hero-grid">
        <div>
          <p class="eyebrow">
            Purdue Global · EdD in Leadership and Innovation
          </p>

          <h1>
            Applied Research<br>
            <em>Success Center</em>
          </h1>

          <p class="intro">
            A program-wide, Claxton-based student support hub for navigating the Applied Research Project sequence. The first build activates ED780 and ED822 while reserving the remaining courses for their updated materials.
          </p>

          <p class="privacy">
            <strong>
              This tool does not write the paper for students.
            </strong>
            It provides course roadmaps, readiness checks, and approved resource links. Checkbox progress is saved only in this browser. Clearing site data, using private/incognito mode, or switching browsers/devices may erase saved progress.
          </p>
        </div>

        <aside class="hero-note">
          <h3>Build status</h3>

          <ul>
            <li><strong>ED780:</strong> Active</li>
            <li><strong>ED810:</strong> Coming Soon</li>
            <li><strong>ED822:</strong> Active</li>
            <li><strong>ED825:</strong> Coming Soon</li>
            <li><strong>ED830:</strong> Coming Soon</li>
            <li><strong>ED840:</strong> Coming Soon</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section shell">
      <div class="section-head">
        <div>
          <p class="eyebrow">Program pathway</p>

          <h2>
            Move through one connected applied research sequence
          </h2>

          <p>
            Each active course center focuses only on what students need at that stage while preserving alignment with the Claxton-based Applied Research Project structure.
          </p>
        </div>
      </div>

      <div class="sequence">
        ${cards}
      </div>

      <div class="notice info">
        <strong>Source-of-truth reminder</strong>
        This website is supplemental. Students should always follow the current Brightspace assignment, rubric, EdD Student Handbook, official program resources, and formal faculty/RPC/committee/IRB guidance when those sources differ from this site.
      </div>
    </section>
  `;
}

function pendingView(code) {
  return `
    <section class="pending-panel">
      <div class="pending-box">
        <div class="big">⏳</div>

        <span class="status pending">
          COMING SOON
        </span>

        <h1>${code}</h1>

        <p>
          This course slot is intentionally reserved in the program hub. No instructional guidance has been published here yet because the updated Claxton-based course materials have not been loaded into this build.
        </p>

        <button
          type="button"
          data-open-course="home"
        >
          Return to Program Home
        </button>
      </div>
    </section>
  `;
}

function courseView(c) {
  const roadmap = c.roadmap
    .map(
      ([u, t, d, m]) => `
        <article class="unit-card ${m ? 'milestone' : ''}">
          <div class="unit">
            Unit ${u}
          </div>

          <h3>${t}</h3>

          <p>${d}</p>

          ${
            m
              ? `<div class="milestone-badge">${m}</div>`
              : ''
          }
        </article>
      `
    )
    .join('');

  const groups = c.groups
    .map(g => {
      const groupKey = `${c.code}.${g.id}`;

      const done = g.items.filter(
        (_, i) => saved[`${groupKey}.${i}`]
      ).length;

      return `
        <details class="check-group" open>
          <summary>
            ${g.title}

            <span data-group-count="${groupKey}">
              ${done} / ${g.items.length}
            </span>
          </summary>

          <div class="checks">
            ${g.items
              .map((item, i) => {
                const key = `${groupKey}.${i}`;

                return `
                  <div class="check-row">
                    <input
                      id="${key}"
                      type="checkbox"
                      data-check-key="${key}"
                      data-group="${groupKey}"
                      ${saved[key] ? 'checked' : ''}
                    >

                    <label for="${key}">
                      ${item}
                    </label>
                  </div>
                `;
              })
              .join('')}
          </div>
        </details>
      `;
    })
    .join('');

  const total = c.groups.reduce(
    (n, g) => n + g.items.length,
    0
  );

  const complete = c.groups.reduce(
    (n, g) =>
      n +
      g.items.filter(
        (_, i) =>
          saved[`${c.code}.${g.id}.${i}`]
      ).length,
    0
  );

  const pct = total
    ? Math.round((complete / total) * 100)
    : 0;

  const resources = c.resources
    .map(
      ([type, title, desc, url]) => `
        <article class="resource-card">
          <span class="type">${type}</span>

          <h3>${title}</h3>

          <p>${desc}</p>

          <a
            href="${url}"
            target="_blank"
            rel="noopener"
          >
            Open resource →
          </a>
        </article>
      `
    )
    .join('');

  const notices = c.notices
    .map(
      n => `
        <div class="notice ${n.type}">
          <strong>${n.title}</strong>
          ${n.text}
        </div>
      `
    )
    .join('');

  return `
    <section class="course-hero">
      <div class="shell">
        <div class="topline">
          <span class="status active">
            ACTIVE
          </span>

          <span class="pill">
            ${c.code}
          </span>
        </div>

        <h1>${c.title}</h1>

        <p class="lead">
          ${c.focus}
        </p>

        <div class="course-meta">
          ${c.meta
            .map(
              x => `<span class="pill">${x}</span>`
            )
            .join('')}
        </div>

        ${notices}
      </div>
    </section>

    <section class="section soft">
      <div class="shell">
        <div class="section-head">
          <div>
            <p class="eyebrow">
              Course roadmap
            </p>

            <h2>
              What students are building across the term
            </h2>

            <p>
              This roadmap highlights the major developmental purpose of each unit and the formal review milestones.
            </p>
          </div>
        </div>

        <div class="roadmap">
          ${roadmap}
        </div>
      </div>
    </section>

    <section class="section shell">
      <div class="section-head">
        <div>
          <p class="eyebrow">
            Student self-checks
          </p>

          <h2>
            Readiness without writing the work
          </h2>

          <p>
            Use these checks to locate gaps before an assignment, RPC conversation, checkpoint, or committee review. They are not a grading decision or approval prediction.
          </p>
        </div>

        <div class="progress-card">
          <strong>
            ${complete} of ${total} checked
          </strong>

          <small>
            Saved in this browser
          </small>

          <div class="progress-line">
            <span
              id="course-progress-bar"
              style="width:${pct}%"
            ></span>
          </div>
        </div>
      </div>

      <div class="check-grid">
        ${groups}
      </div>
    </section>

    <section class="section cream">
      <div class="shell">
        <div class="section-head">
          <div>
            <p class="eyebrow">
              Course resources
            </p>

            <h2>
              ${c.code} documents included in this package
            </h2>

            <p>
              Only student-facing/supportive documents were placed in the public resource folder. Internal build documents and RPC-only materials were intentionally excluded.
            </p>
          </div>
        </div>

        <div class="resource-grid">
          ${resources}
        </div>
      </div>
    </section>
  `;
}

function render(route) {
  const app = document.getElementById('app');

  let view = 'home';

  if (route && route !== 'home') {
    view = route.toUpperCase();
  }

  if (view === 'HOME') {
    view = 'home';
  }

  if (view === 'home') {
    app.innerHTML = homeView();
  } else if (courses[view]) {
    app.innerHTML = courseView(courses[view]);
  } else {
    app.innerHTML = pendingView(view);
  }

  document.getElementById('course-picker').value =
    view === 'home'
      ? 'home'
      : view;

  wireDynamic();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function currentRoute() {
  const h = location.hash
    .replace('#', '')
    .trim();

  return h || 'home';
}

function openCourse(code) {
  location.hash =
    code === 'home'
      ? 'home'
      : code;
}

function wireDynamic() {
  document
    .querySelectorAll('[data-open-course]')
    .forEach(button =>
      button.addEventListener(
        'click',
        () =>
          openCourse(
            button.dataset.openCourse
          )
      )
    );

  document
    .querySelectorAll('[data-check-key]')
    .forEach(cb =>
      cb.addEventListener(
        'change',
        event => {
          const key =
            event.target.dataset.checkKey;

          saved[key] =
            event.target.checked;

          save();

          const group =
            event.target.dataset.group;

          const course =
            group.split('.')[0];

          const c =
            courses[course];

          const g =
            c.groups.find(
              x =>
                `${course}.${x.id}` === group
            );

          const done =
            g.items.filter(
              (_, i) =>
                saved[`${group}.${i}`]
            ).length;

          const countEl =
            document.querySelector(
              `[data-group-count="${group}"]`
            );

          if (countEl) {
            countEl.textContent =
              `${done} / ${g.items.length}`;
          }

          const total =
            c.groups.reduce(
              (n, x) =>
                n + x.items.length,
              0
            );

          const complete =
            c.groups.reduce(
              (n, x) =>
                n +
                x.items.filter(
                  (_, i) =>
                    saved[
                      `${course}.${x.id}.${i}`
                    ]
                ).length,
              0
            );

          const bar =
            document.getElementById(
              'course-progress-bar'
            );

          if (bar) {
            bar.style.width =
              `${Math.round(
                (complete / total) * 100
              )}%`;
          }

          const pc =
            document.querySelector(
              '.progress-card strong'
            );

          if (pc) {
            pc.textContent =
              `${complete} of ${total} checked`;
          }
        }
      )
    );
}

document
  .getElementById('course-picker')
  .addEventListener(
    'change',
    event =>
      openCourse(event.target.value)
  );

document
  .querySelector(
    '[data-course-link="home"]'
  )
  .addEventListener(
    'click',
    event => {
      event.preventDefault();
      openCourse('home');
    }
  );

document
  .getElementById('print-page')
  .addEventListener(
    'click',
    () => window.print()
  );

document
  .getElementById('clear-progress')
  .addEventListener(
    'click',
    () => {
      if (
        confirm(
          'Clear all checkbox progress saved by this site in this browser?'
        )
      ) {
        localStorage.removeItem(
          STORAGE_KEY
        );

        saved = {};

        render(currentRoute());
      }
    }
  );

window.addEventListener(
  'hashchange',
  () => render(currentRoute())
);

render(currentRoute());
