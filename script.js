document.getElementById("getGuidanceBtn").addEventListener("click", function () {
    const grade = document.getElementById("currentStudy").value;
    const career = document.getElementById("aspiration").value;
    const guidanceContainer = document.getElementById("guidance");

    if (grade === "10th" && career === "software-engineer") {
        guidanceContainer.innerHTML = `
            <h1>How to Become a Software Engineer Starting from 10th Grade</h1>

<p>Becoming a <strong>Software Engineer</strong> starting from 10th grade is a structured journey, involving both formal education and skill development. Below are the educational paths and career outlooks to guide you in your pursuit of a software engineering career:</p>

<h2>1. Educational Paths to Become a Software Engineer</h2>

<h3>Path 1: Traditional Education Route (12th, B.Tech/BCA, MCA)</h3>
<p>
    After completing 10th grade, you can choose the following educational route to become a software engineer:
</p>
<ul>
    <li><strong>Step 1:</strong> Complete 12th grade with Science (preferably with Computer Science, Information Technology, or Mathematics).</li>
    <li><strong>Step 2:</strong> Choose either:
        <ul>
            <li><strong>B.Tech (Bachelor of Technology)</strong> in Computer Science or IT (4 years).</li>
            <li><strong>BCA (Bachelor of Computer Applications)</strong> (3 years).</li>
        </ul>
    </li>
    <li><strong>Step 3:</strong> Optionally pursue a Master’s degree:
        <ul>
            <li><strong>MCA (Master of Computer Applications)</strong> (2 years) to specialize further.</li>
        </ul>
    </li>
    <li><strong>Step 4:</strong> Apply for software engineering roles after completing your degree, specializing in areas like software development, data structures, algorithms, and system design.</li>
</ul>

<h3>Path 2: Polytechnic + B.Tech (Lateral Entry)</h3>
<p>
    After completing 10th grade, you can opt for a <strong>Polytechnic Diploma</strong> in Computer Science or IT, and later pursue a <strong>B.Tech</strong> through <strong>Lateral Entry</strong>:
</p>
<ul>
    <li><strong>Step 1:</strong> Complete a 3-year <strong>Polytechnic Diploma</strong> in Computer Science/IT.</li>
    <li><strong>Step 2:</strong> After finishing the diploma, you can enter the second year of a B.Tech program via <strong>Lateral Entry</strong>.</li>
    <li><strong>Step 3:</strong> Finish your B.Tech (Computer Science or IT) and apply for software engineering roles.</li>
</ul>

<h3>Path 3: Self-Taught + Certifications</h3>
<p>
    If you prefer a more flexible learning route, you can pursue self-taught programming with online resources and certifications:
</p>
<ul>
    <li><strong>Step 1:</strong> Learn programming languages like Python, Java, or C++ through online platforms (Codecademy, Coursera, etc.).</li>
    <li><strong>Step 2:</strong> Learn software engineering fundamentals, including data structures, algorithms, and object-oriented programming (OOP).</li>
    <li><strong>Step 3:</strong> Get hands-on experience by building small projects, contributing to open-source projects, or interning at tech companies.</li>
    <li><strong>Step 4:</strong> After gaining skills, apply for software engineering positions, creating a portfolio of your work.</li>
</ul>

<h3>Path 4: Coding Bootcamps</h3>
<p>
    Another quick path to becoming a software engineer is by joining a coding bootcamp:
</p>
<ul>
    <li><strong>Step 1:</strong> Join a <strong>coding bootcamp</strong> that focuses on software development, which typically lasts between 6 months and 1 year.</li>
    <li><strong>Step 2:</strong> Learn full-stack development (front-end and back-end) along with software engineering best practices.</li>
    <li><strong>Step 3:</strong> Build a portfolio of projects during the bootcamp, and apply for software engineering jobs post-graduation.</li>
</ul>

<h2>2. Time to Become a Software Engineer</h2>
<p>Depending on the path you choose, the time to become a software engineer can range from 2-3 years to 6-8 years:</p>
<ul>
    <li><strong>Path 1: Traditional Route (B.Tech/BCA + MCA)</strong>: 6-8 years (2024-2032)</li>
    <li><strong>Path 2: Polytechnic + Lateral Entry</strong>: 5 years (2029)</li>
    <li><strong>Path 3: Self-Taught + Certifications</strong>: 2-3 years (2027-2028)</li>
    <li><strong>Path 4: Coding Bootcamps</strong>: 1-2 years (2025-2026)</li>
</ul>

<h2>3. Job Market Outlook for Software Engineers by 2030</h2>
<p>The demand for software engineers is expected to continue growing, especially for developers with expertise in areas like AI, data science, and cloud computing. By 2030, software engineers will remain highly sought after, with specializations such as:</p>
<ul>
    <li><strong>Full-stack development</strong></li>
    <li><strong>Cloud computing</strong></li>
    <li><strong>Artificial Intelligence (AI)</strong></li>
    <li><strong>Cybersecurity</strong></li>
</ul>

<h2>4. Expected Salary for Software Engineers (2024 vs. By 2030)</h2>
<p>Here's an overview of salary expectations for software engineers at different experience levels:</p>
<ul>
    <li><strong>Freshers (2024):</strong> ₹6 LPA to ₹12 LPA (entry-level software engineering roles).</li>
    <li><strong>Mid-level (5-7 years of experience):</strong> ₹12 LPA to ₹20 LPA.</li>
    <li><strong>Senior-level (8+ years of experience):</strong> ₹20 LPA to ₹40 LPA.</li>
    <li><strong>Freelancers and Consultants:</strong> ₹8 LPA to ₹30 LPA depending on specialization.</li>
</ul>

<h2>Conclusion</h2>
<p>
    Whether you follow a traditional education route or take the self-taught approach, becoming a software engineer is a rewarding career choice. With the increasing demand for technology solutions and software products, the field offers significant growth opportunities, both in salary and career advancement.
</p>

        `;
    } else if (grade === "10th" && career === "mechanical-engineer") {
        guidanceContainer.innerHTML = `
            <h1>Paths to Become a Mechanical Engineer from 10th Grade</h1>
<p>To become a Mechanical Engineer, you need to follow a structured educational path. Below are the possible routes:</p>

<h2>Path 1: Traditional Education Route (12th, B.Tech, M.Tech)</h2>
<p><strong>Step 1:</strong> After 10th Grade, opt for 12th Grade with Science (preferably with subjects such as Physics, Chemistry, and Mathematics).</p>
<p><strong>Step 2:</strong> After completing 12th Grade, pursue a Bachelor’s Degree in Mechanical Engineering (B.Tech) for 4 years. Admission is typically based on entrance exams like JEE Main, JEE Advanced, or state-level exams.</p>
<p><strong>Step 3:</strong> After B.Tech, you may pursue an M.Tech (Master’s in Technology) in a specialized area like Thermal Engineering, Robotics, Manufacturing, etc. (2 years).</p>
<p><strong>Step 4:</strong> After B.Tech (or M.Tech), you can begin working in various mechanical engineering roles like Design Engineer, Manufacturing Engineer, or R&D Engineer.</p>

<h2>Path 2: Polytechnic + B.Tech (Lateral Entry)</h2>
<p><strong>Step 1:</strong> After completing 10th Grade, opt for a Polytechnic Diploma in Mechanical Engineering (3 years).</p>
<p><strong>Step 2:</strong> After completing the Polytechnic course, gain admission directly into the 2nd Year of B.Tech (Mechanical Engineering) via Lateral Entry (this saves one year of education).</p>
<p><strong>Step 3:</strong> After completing B.Tech, you can begin working in mechanical engineering roles.</p>

<h2>Path 3: Direct Job after Polytechnic (Engineering Technician)</h2>
<p><strong>Step 1:</strong> After 10th Grade, pursue a Polytechnic Diploma in Mechanical Engineering (3 years).</p>
<p><strong>Step 2:</strong> Begin working in entry-level mechanical roles such as Mechanical Technician or Maintenance Engineer in industries like manufacturing or automotive.</p>
<p><strong>Step 3:</strong> After gaining experience, you may pursue B.Tech (Mechanical Engineering) through Lateral Entry to transition to higher roles like Design Engineer or Production Engineer.</p>

<h2>Best Path</h2>
<p>The most common and recommended path is Path 1 (B.Tech after 12th Science) as it offers comprehensive theoretical and practical knowledge, providing better career opportunities.</p>
<p>Path 2 (Polytechnic + Lateral Entry) is suitable for students who want to save a year and start earlier. However, it may have fewer opportunities compared to a full B.Tech degree.</p>
<p>Path 3 (Diploma + Job) is for those who prefer hands-on experience before advancing their education.</p>

<h1>Time to Become a Mechanical Engineer (From 2024)</h1>
<p><strong>Path 1 (B.Tech after 12th Science):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>B.Tech (Mechanical Engineering): 2026 to 2030 (4 years).</li>
  <li>Total Time: 6 years to start working as a Mechanical Engineer (by 2030).</li>
</ul>

<p><strong>Path 2 (Polytechnic + Lateral Entry):</strong></p>
<ul>
  <li>Polytechnic Diploma: 2024 to 2027 (3 years).</li>
  <li>Lateral Entry into B.Tech: 2027 to 2029 (2 years).</li>
  <li>Total Time: 5 years to start working as a Mechanical Engineer (by 2029).</li>
</ul>

<p><strong>Path 3 (Diploma + Job):</strong></p>
<ul>
  <li>Polytechnic Diploma: 2024 to 2027 (3 years).</li>
  <li>Work in an entry-level mechanical role.</li>
  <li>Transition to higher engineering roles after completing B.Tech via Lateral Entry or distance education.</li>
  <li>Total Time: 5-7 years (by 2029-2031).</li>
</ul>

<h2>Job Market Outlook for Mechanical Engineers by 2030</h2>
<p>The demand for mechanical engineers is expected to remain steady but will experience some decline due to automation, outsourcing, and reduced demand in traditional manufacturing sectors. However, fields like robotics, AI, automation, and green energy will see growth in job opportunities. Overall, the job market for mechanical engineers may decrease by 10-15% annually due to automation and shifts in the industrial landscape.</p>

<h1>CTC for Mechanical Engineers</h1>
<p><strong>Current CTC for Freshers (2024):</strong></p>
<ul>
  <li>Private Sector: ₹4 LPA to ₹8 LPA.</li>
  <li>Public Sector (PSUs): ₹6 LPA to ₹9 LPA.</li>
  <li>Core Mechanical Companies: ₹4 LPA to ₹7 LPA.</li>
</ul>

<p><strong>Expected CTC after B.Tech (by 2029-2030):</strong></p>
<ul>
  <li>Private Sector: ₹5 LPA to ₹10 LPA.</li>
  <li>Core Engineering Companies: ₹6 LPA to ₹12 LPA.</li>
  <li>PSUs: ₹7 LPA to ₹12 LPA (after clearing exams like GATE).</li>
</ul>

<h2>Salary Growth</h2>
<p>As you gain experience in mechanical engineering, the salary will increase significantly. With 5-10 years of experience, you can expect:</p>
<ul>
  <li>Private Sector: ₹8 LPA to ₹15 LPA.</li>
  <li>Core Mechanical Companies: ₹10 LPA to ₹20 LPA.</li>
  <li>PSUs: ₹12 LPA to ₹20 LPA.</li>
</ul>

<p><strong>Specializations in robotics, aerospace, AI/Automation, and green technologies will lead to higher salary potential.</strong></p>

<h1>Summary</h1>
<p><strong>Time to Become a Mechanical Engineer:</strong> Around 6-7 years for the traditional B.Tech route, and 5 years for Polytechnic + Lateral Entry.</p>
<p><strong>Job Market Outlook:</strong> Mechanical engineering jobs will decrease by 10-15% annually, but there will be growth in automation, robotics, and green technologies.</p>
<p><strong>CTC:</strong> Freshers can expect ₹4 LPA to ₹8 LPA, with the potential to earn ₹10 LPA to ₹20 LPA after 5-10 years of experience, especially with specialization.</p>

        `;

    } else if (grade === "10th" && career === "air-hostess") {
        guidanceContainer.innerHTML = `<h1>Paths to Become an Air Hostess from 10th Grade</h1>
<p>To pursue a career as an air hostess, there are several pathways you can take. Below are the options:</p>

<h2>Path 1: 12th Grade with Airline Courses</h2>
<p><strong>Step 1:</strong> After completing 10th grade, you can opt for 12th grade in any stream, though Arts or Science is preferred due to the subjects related to communication, hospitality, and tourism.</p>
<p><strong>Step 2:</strong> After completing 12th grade, pursue an Air Hostess Training Program from a recognized aviation academy. These programs typically last 6 months to 1 year and focus on aviation protocols, hospitality, communication, grooming, and emergency procedures.</p>
<p><strong>Step 3:</strong> Once you complete the training program, you can apply to airlines for the position of an Air Hostess. Airlines generally have their own recruitment processes, which include interviews, medical checks, and personality assessments.</p>

<h2>Path 2: Direct Air Hostess Training after 10th Grade</h2>
<p><strong>Step 1:</strong> After 10th grade, you can directly join a diploma or certification program in Air Hostess training from an aviation academy. These programs often last 1-2 years and cover all essential aspects of the profession.</p>
<p><strong>Step 2:</strong> After completing the training, you can apply for recruitment in airlines, where the selection process includes medical tests, interviews, and personal assessments.</p>

<h2>Path 3: Bachelors in Aviation or Hospitality Management</h2>
<p><strong>Step 1:</strong> After 10th grade, you can opt for 12th grade (preferably in Science or Arts).</p>
<p><strong>Step 2:</strong> After completing 12th grade, pursue a 3-year degree program in Aviation or Hospitality Management. This will provide a broader understanding of the aviation industry and the skills needed for the air hostess role.</p>
<p><strong>Step 3:</strong> Post your degree, you can apply for an Air Hostess position with the added advantage of a degree in aviation management, which will enhance your career prospects.</p>

<h2>Best Path</h2>
<p>The most common and recommended path is Path 1 (12th Grade with Airline Courses) as it provides targeted training in the necessary skills and knowledge for becoming an air hostess. Path 2 (Direct Air Hostess Training after 10th) is suitable for those who want to enter the field quickly without completing 12th, but it limits the options for higher education. Path 3 (Bachelors in Aviation or Hospitality Management) is ideal for those who wish to pursue a broader career in the aviation industry with a long-term career plan.</p>

<h1>Time to Become an Air Hostess (From 2024)</h1>
<p><strong>Path 1 (12th Grade + Air Hostess Training):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Air Hostess Training Program: 2026 to 2027 (6 months to 1 year).</li>
  <li>Total Time: 3 to 4 years to start working as an Air Hostess (by 2027-2028).</li>
</ul>

<p><strong>Path 2 (Direct Air Hostess Training after 10th):</strong></p>
<ul>
  <li>Air Hostess Training Program: 2024 to 2026 (1 to 2 years).</li>
  <li>Total Time: 2 to 3 years to start working as an Air Hostess (by 2026-2027).</li>
</ul>

<p><strong>Path 3 (Bachelors in Aviation + Air Hostess Role):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Bachelors Degree in Aviation or Hospitality Management: 2026 to 2029 (3 years).</li>
  <li>Total Time: 5 to 6 years to start working as an Air Hostess (by 2029-2030).</li>
</ul>

<h2>Job Market Outlook for Air Hostesses by 2030</h2>
<p>The demand for air hostesses is expected to grow as global air travel continues to rise. However, the growth rate may slow down due to automation, cost-cutting measures by airlines, and increased competition. The aviation industry is also focusing more on customer service and safety, which may create more opportunities for well-trained air hostesses with additional skills like multi-lingual capabilities and expertise in handling different passenger needs. Overall, the job market is expected to grow at a moderate pace with fluctuations due to economic and geopolitical factors.</p>

<h1>CTC for Air Hostesses</h1>
<p><strong>Current CTC for Freshers (2024):</strong></p>
<ul>
  <li>Domestic Airlines: ₹3 LPA to ₹6 LPA.</li>
  <li>International Airlines: ₹5 LPA to ₹10 LPA.</li>
</ul>

<p><strong>Expected CTC after 5 Years (by 2029):</strong></p>
<ul>
  <li>Domestic Airlines: ₹6 LPA to ₹12 LPA.</li>
  <li>International Airlines: ₹10 LPA to ₹20 LPA.</li>
</ul>

<h2>Salary Growth</h2>
<p>As you gain experience, the salary for air hostesses increases, especially with experience in international airlines or senior roles like senior flight attendant or cabin crew supervisor.</p>
<ul>
  <li>Domestic Airlines: ₹6 LPA to ₹12 LPA after 5 years.</li>
  <li>International Airlines: ₹10 LPA to ₹20 LPA after 5-10 years, with opportunities for higher positions.</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become an Air Hostess:</strong> Around 2-4 years with air hostess training after 12th grade or 1-2 years with direct training after 10th.</p>
<p><strong>Job Market Outlook:</strong> The demand for air hostesses will continue to grow but at a slower pace, with increased competition and automation affecting the industry.</p>
<p><strong>CTC:</strong> Freshers can expect ₹3 LPA to ₹6 LPA in domestic airlines, and ₹5 LPA to ₹10 LPA in international airlines, with salary growth up to ₹12 LPA to ₹20 LPA after 5-10 years of experience.</p>
`;}
    
else if (grade === "10th" && career === "architectural-engineer") {
    guidanceContainer.innerHTML = `<h1>Paths to Become an Architectural Engineer from 10th Grade</h1>
<p>To pursue a career as an Architectural Engineer after completing 10th grade, there are several educational pathways you can follow. Below are the available options:</p>

<h2>Path 1: 12th Grade (Science Stream) with Engineering Entrance Exams</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for 12th grade with the Science stream, particularly with subjects like Physics, Chemistry, and Mathematics (PCM), as they are essential for engineering studies.</p>
<p><strong>Step 2:</strong> After 12th, you will need to appear for engineering entrance exams like JEE (Joint Entrance Examination) or other state-level exams to secure admission to an undergraduate program in Architectural Engineering.</p>
<p><strong>Step 3:</strong> After qualifying in the entrance exams, pursue a 4-year B.Tech/B.E. program in Architectural Engineering at a recognized college or university. The curriculum includes subjects like Structural Design, Building Materials, Sustainable Architecture, and Construction Technology.</p>
<p><strong>Step 4:</strong> After completing your B.Tech, you can apply for jobs as an Architectural Engineer in construction firms, architectural firms, or even government agencies. You may also pursue higher studies like M.Tech in Architecture or Structural Engineering to specialize further.</p>

<h2>Path 2: Diploma in Architectural Engineering</h2>
<p><strong>Step 1:</strong> After 10th grade, you can opt for a diploma in Architectural Engineering. This 3-year diploma program includes subjects related to building design, construction techniques, materials, and civil engineering basics.</p>
<p><strong>Step 2:</strong> After completing the diploma, you can work as a junior engineer or drafter in architectural or construction firms. You can also choose to pursue a B.Tech in Architectural Engineering after the diploma to enhance your qualifications.</p>

<h2>Best Path</h2>
<p>The most common and recommended path is Path 1 (12th Grade with PCM + Engineering Entrance Exams) as it provides in-depth knowledge and better career prospects. However, Path 2 (Diploma in Architectural Engineering) is a good alternative if you wish to gain hands-on experience and start working earlier.</p>

<h1>Time to Become an Architectural Engineer (From 2024)</h1>
<p><strong>Path 1 (12th Grade + Engineering Entrance + B.Tech):</strong></p>
<ul>
  <li>12th Grade (Science Stream): 2024 to 2026 (2 years).</li>
  <li>Engineering Entrance Exam and Admission: 2026 (1 year for preparation and exam).</li>
  <li>B.Tech in Architectural Engineering: 2026 to 2030 (4 years).</li>
  <li>Total Time: 6 years to start working as an Architectural Engineer (by 2030).</li>
</ul>

<p><strong>Path 2 (Diploma in Architectural Engineering):</strong></p>
<ul>
  <li>Diploma in Architectural Engineering: 2024 to 2027 (3 years).</li>
  <li>Total Time: 3 years to start working (by 2027).</li>
</ul>

<h2>Job Market Outlook for Architectural Engineers by 2030</h2>
<p>The demand for Architectural Engineers is expected to grow significantly as urbanization continues, with increasing construction and infrastructure projects globally. The growth of smart cities, sustainable buildings, and green construction is expected to open new job opportunities. However, the competition for prestigious positions in top firms may be fierce, especially for fresh graduates, due to the increasing number of qualified engineers.</p>

<h1>CTC for Architectural Engineers</h1>
<p><strong>Current CTC for Freshers (2024):</strong></p>
<ul>
  <li>Entry-Level Architectural Engineer: ₹3 LPA to ₹5 LPA.</li>
  <li>Entry-Level in Government Organizations: ₹4 LPA to ₹6 LPA.</li>
</ul>

<p><strong>Expected CTC after 5 Years (by 2029):</strong></p>
<ul>
  <li>Architectural Engineer in Top Firms: ₹7 LPA to ₹12 LPA.</li>
  <li>Architectural Engineer in Government Projects: ₹6 LPA to ₹10 LPA.</li>
</ul>

<h2>Salary Growth</h2>
<p>As you gain experience and expertise, the salary for architectural engineers increases. With significant experience, senior roles such as Project Manager or Senior Architect can offer much higher salaries.</p>
<ul>
  <li>After 5 Years: ₹7 LPA to ₹12 LPA in private firms, ₹6 LPA to ₹10 LPA in government roles.</li>
  <li>After 10 Years: ₹15 LPA to ₹20 LPA in top firms with senior roles.</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become an Architectural Engineer:</strong> Around 6 years (Path 1) or 3 years (Path 2).</p>
<p><strong>Job Market Outlook:</strong> The demand for architectural engineers will continue to rise, especially with the increasing number of construction and urbanization projects globally.</p>
<p><strong>CTC:</strong> Freshers can expect ₹3 LPA to ₹5 LPA in private firms and ₹4 LPA to ₹6 LPA in government organizations, with salary growth up to ₹7 LPA to ₹12 LPA after 5 years, and higher after 10 years.</p>
`;}

    else if (grade === "10th" && career === "army-officer") {
    guidanceContainer.innerHTML = `<h1>Paths to Become an Army Officer from 10th Grade</h1>
<p>To become an Army Officer after completing 10th grade, there are specific educational routes and entrance exams to follow. Below are the available options:</p>

<h2>Path 1: 12th Grade (Science Stream) with NDA Entrance Exam</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for the Science stream in 12th grade, particularly with subjects like Physics, Chemistry, and Mathematics (PCM), as they are essential for the National Defence Academy (NDA) exam.</p>
<p><strong>Step 2:</strong> After completing 12th grade, you can appear for the NDA Entrance Exam. The NDA exam is conducted by the Union Public Service Commission (UPSC) twice a year. It is a written examination followed by a Service Selection Board (SSB) interview, which includes psychological tests, group tasks, and a medical examination.</p>
<p><strong>Step 3:</strong> After clearing the NDA exam and SSB interview, you will be sent to the National Defence Academy (NDA) in Pune for training, which lasts for 3 years. During this time, you will undergo rigorous physical and military training.</p>
<p><strong>Step 4:</strong> After completing NDA training, you will be commissioned as a Lieutenant in the Indian Army and start serving as an Army Officer.</p>

<h2>Path 2: After Graduation (CDS Exam)</h2>
<p><strong>Step 1:</strong> If you have already completed your 12th grade and opted for a different stream (such as Commerce or Arts), you can first complete your undergraduate degree (Bachelor’s degree) from any recognized university.</p>
<p><strong>Step 2:</strong> After completing your graduation, you can appear for the Combined Defence Services (CDS) exam, which is conducted by the UPSC twice a year. The CDS exam is a written test followed by an SSB interview and medical examination.</p>
<p><strong>Step 3:</strong> After clearing the CDS exam and SSB interview, you will be selected for training at the Indian Military Academy (IMA) in Dehradun, which lasts for 1 year.</p>
<p><strong>Step 4:</strong> After successfully completing your training at IMA, you will be commissioned as an Army Officer.</p>

<h2>Entrance Exams for Army Officer</h2>
<ul>
  <li><strong>National Defence Academy (NDA):</strong> After 12th grade, for candidates who opt for the Science stream (PCM). The exam is conducted twice a year by UPSC.</li>
  <li><strong>Combined Defence Services (CDS):</strong> For graduates (after 12th grade) to join the Army, Navy, or Air Force. This exam is also conducted by UPSC twice a year.</li>
  <li><strong>Technical Entry Scheme (TES):</strong> For candidates with a 10+2 background in Science (PCM). This entry is through a direct entry based on the marks obtained in the 12th grade and requires selection through a written test and an SSB interview.</li>
</ul>

<h2>Best Path</h2>
<p>The best route for most students is Path 1 (12th Grade with Science + NDA Entrance Exam) because it allows you to enter the Army right after school. Path 2 (Graduation + CDS Exam) is an excellent choice for those who wish to join the Army after completing their undergraduate degree.</p>

<h1>Time to Become an Army Officer (From 2024)</h1>
<p><strong>Path 1 (12th Grade + NDA):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>NDA Entrance Exam and Training: 2026 to 2029 (3 years).</li>
  <li>Total Time: 5 years to become an Army Officer (by 2029).</li>
</ul>

<p><strong>Path 2 (Graduation + CDS):</strong></p>
<ul>
  <li>Graduation: 2024 to 2027 (3 years).</li>
  <li>CDS Exam and Training: 2027 to 2028 (1 year).</li>
  <li>Total Time: 4 years after graduation to become an Army Officer (by 2028).</li>
</ul>

<h2>Job Market Outlook for Army Officers by 2030</h2>
<p>The Indian Army continues to be a highly respected institution, and the demand for capable officers remains strong. With the expansion of defence capabilities, the Army is likely to see an increase in recruitment. The Army offers a challenging and fulfilling career with opportunities for leadership and growth. However, competition for officer positions is tough due to the rigorous selection process and the limited number of vacancies.</p>

<h1>Salary and Benefits for Army Officers</h1>
<p><strong>Current Salary for Fresh Army Officers (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹56,100 to ₹1,77,500 (Pay Scale as per 7th Pay Commission), depending on the rank.</li>
  <li>Allowances: House Rent Allowance (HRA), Transport Allowance, and Special Allowances.</li>
  <li>Additional Benefits: Medical facilities, pension, and other perks like canteen facilities, accommodation, and travel allowances.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>Rank: Captain to Major</li>
  <li>Salary: ₹80,000 to ₹1,30,000 per month, including allowances.</li>
</ul>

<h2>Salary Growth</h2>
<p>As you rise through the ranks, your salary and benefits increase significantly. After 10 years of service, you can expect to be in higher ranks with more responsibilities and a higher salary.</p>
<ul>
  <li>After 10 Years: ₹1,50,000 to ₹2,00,000 per month (depending on rank and experience).</li>
  <li>Additional Perks: Promotions to Colonel, Brigadier, and beyond, along with increased salary and responsibilities.</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become an Army Officer:</strong> Around 5 years (Path 1 with NDA) or 4 years after graduation (Path 2 with CDS).</p>
<p><strong>Job Market Outlook:</strong> The demand for capable Army Officers remains strong, with opportunities for leadership and personal growth. However, the competition is intense due to the rigorous selection process.</p>
<p><strong>Salary:</strong> Freshers can expect a starting salary of ₹56,100 to ₹1,77,500, with the potential for higher earnings as you progress in rank, reaching ₹1,50,000 to ₹2,00,000 after 10 years of service.</p>
`;}
    else if (grade === "10th" && career === "architect") {
        guidanceContainer.innerHTML = `<h1>Paths to Become an Architect from 10th Grade</h1>
<p>To become an Architect after completing 10th grade, there are specific educational routes and entrance exams to follow. Below are the available options:</p>

<h2>Path 1: 12th Grade (Science Stream) with NATA or JEE Main (Architecture)</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for the Science stream in 12th grade, particularly with subjects like Physics, Chemistry, and Mathematics (PCM), as they are essential for the architecture entrance exams.</p>
<p><strong>Step 2:</strong> After completing 12th grade, you can appear for the National Aptitude Test in Architecture (NATA) or JEE Main (Architecture paper). NATA is the most commonly accepted exam for admission to architecture programs across India. JEE Main also offers an Architecture paper for IITs and NITs.</p>
<p><strong>Step 3:</strong> After clearing the entrance exam, you will be eligible for admission to a Bachelor of Architecture (B.Arch.) program. The program typically lasts for 5 years and includes both theoretical and practical knowledge in architecture, design, and construction.</p>

<h2>Path 2: After Graduation (Postgraduate in Architecture)</h2>
<p><strong>Step 1:</strong> If you have already completed your 12th grade in a different stream, you can still pursue a Bachelor’s degree in Architecture (B.Arch.) after completing a related undergraduate degree like Civil Engineering or a Design-related field.</p>
<p><strong>Step 2:</strong> After completing your undergraduate degree, you can apply for a Master’s in Architecture (M.Arch.), which will further enhance your skills in specialized architectural fields like urban design, interior design, and sustainable architecture.</p>

<h2>Entrance Exams for Architecture</h2>
<ul>
  <li><strong>National Aptitude Test in Architecture (NATA):</strong> An entrance exam for admission to undergraduate architecture programs in various institutions across India.</li>
  <li><strong>JEE Main (Architecture Paper):</strong> A paper specifically for architecture students who wish to join IITs and NITs for B.Arch. courses.</li>
  <li><strong>State-level Entrance Exams:</strong> Various states conduct their own entrance exams for architecture courses, such as AP EAMCET for Andhra Pradesh and TS EAMCET for Telangana.</li>
</ul>

<h2>Best Path</h2>
<p>The best route for most students is Path 1 (12th Grade with Science + NATA/JEE Main), as it allows you to directly enter the field of architecture right after completing school.</p>

<h1>Time to Become an Architect (From 2024)</h1>
<p><strong>Path 1 (12th Grade + NATA/JEE Main):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>B.Arch. Program: 2026 to 2031 (5 years).</li>
  <li>Total Time: 7 years to become an Architect (by 2031).</li>
</ul>

<p><strong>Path 2 (Graduation + M.Arch.):</strong></p>
<ul>
  <li>Undergraduate Degree: 2024 to 2027 (3 years).</li>
  <li>M.Arch. Program: 2027 to 2029 (2 years).</li>
  <li>Total Time: 5 years after graduation to become an Architect (by 2029).</li>
</ul>

<h2>Job Market Outlook for Architects by 2030</h2>
<p>The demand for qualified architects continues to grow with the increasing urbanization and infrastructure development worldwide. Architects are in demand for residential, commercial, industrial, and urban planning projects. With a focus on sustainable design, energy-efficient buildings, and urban renewal, architects can expect numerous career opportunities in the coming decade.</p>

<h1>Salary and Benefits for Architects</h1>
<p><strong>Current Salary for Fresh Architects (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹25,000 to ₹50,000 per month (depending on the location and organization).</li>
  <li>Additional Benefits: Health insurance, paid leaves, and sometimes performance bonuses or incentives based on project success.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, the salary can range from ₹60,000 to ₹1,00,000 per month, depending on the type of projects and specialization.</li>
</ul>

<h2>Salary Growth</h2>
<p>Architects with specialized skills, such as sustainable design or urban planning, may see higher salaries. As you gain experience and take on more complex projects, your earning potential increases significantly.</p>
<ul>
  <li>After 10 Years: ₹1,20,000 to ₹2,00,000 per month (depending on seniority, specialization, and location).</li>
  <li>Freelance Architects or those in senior positions at design firms may earn even higher salaries with commissions and project-based earnings.</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become an Architect:</strong> Around 7 years (Path 1 with NATA/JEE Main) or 5 years after graduation (Path 2 with M.Arch.).</p>
<p><strong>Job Market Outlook:</strong> The demand for architects is expected to remain strong, driven by urbanization and the need for sustainable designs and infrastructure development. Architects with specialized skills will have the most opportunities.</p>
<p><strong>Salary:</strong> Freshers can expect a starting salary of ₹25,000 to ₹50,000 per month, with the potential for higher earnings as you progress in your career, reaching ₹1,20,000 to ₹2,00,000 after 10 years.</p>
`;}
        else if (grade === "10th" && career === "biologist") {
            guidanceContainer.innerHTML = `<h1>Paths to Become a Biologist from 10th Grade</h1>
<p>To become a Biologist after completing 10th grade, here are the educational steps and entrance exams you need to follow:</p>

<h2>Path 1: 12th Grade (Science Stream) with Biology</h2>
<p><strong>Step 1:</strong> After completing 10th grade, choose the Science stream in 12th grade with Biology as one of your core subjects. This will help you build a foundation in biological sciences, including subjects like Physics, Chemistry, and Biology.</p>
<p><strong>Step 2:</strong> After completing 12th grade, you can pursue a Bachelor's degree in a related biological field such as B.Sc. in Biology, B.Sc. in Zoology, B.Sc. in Botany, or B.Sc. in Life Sciences.</p>
<p><strong>Step 3:</strong> Once you complete your undergraduate degree, you can further specialize by pursuing a Master's degree (M.Sc.) in Biology or a related field, such as Ecology, Genetics, Microbiology, or Biochemistry.</p>

<h2>Path 2: After Graduation (Further Specialization)</h2>
<p><strong>Step 1:</strong> After completing your undergraduate degree in Biology or a related field, you can opt for specialized postgraduate courses like M.Sc. in Genetics, M.Sc. in Microbiology, M.Sc. in Biotechnology, or other advanced biological fields.</p>
<p><strong>Step 2:</strong> You may choose to pursue a Ph.D. in Biology or any specific branch of Biology, such as Environmental Biology, Molecular Biology, or Marine Biology, for a research-oriented career.</p>

<h2>Entrance Exams for Biology-related Programs</h2>
<ul>
  <li><strong>JEE Main:</strong> Though primarily for engineering, JEE Main offers a paper for admission to some Biology-based programs at IITs and NITs.</li>
  <li><strong>NEET (National Eligibility cum Entrance Test):</strong> A nationwide entrance exam mainly for medical sciences but also useful for courses like B.Sc. in Biology or related programs in some institutions.</li>
  <li><strong>State-level Entrance Exams:</strong> Various states have their own entrance exams for biology-related courses such as UPSEE, MH CET, etc.</li>
  <li><strong>Indian Council of Agricultural Research (ICAR) Entrance Exam:</strong> For pursuing a degree in agricultural biology and related fields.</li>
</ul>

<h2>Best Path</h2>
<p>The best path for most students is Path 1 (12th Grade with Biology + B.Sc. in Biology), as it provides a solid foundation in biological sciences and allows for various specializations in higher education.</p>

<h1>Time to Become a Biologist (From 2024)</h1>
<p><strong>Path 1 (12th Grade + B.Sc. + M.Sc.):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>B.Sc. Program: 2026 to 2029 (3 years).</li>
  <li>M.Sc. Program: 2029 to 2031 (2 years).</li>
  <li>Total Time: 7 years to become a Biologist (by 2031).</li>
</ul>

<p><strong>Path 2 (Undergraduate Degree + Ph.D.):</strong></p>
<ul>
  <li>Undergraduate Degree (B.Sc.): 2024 to 2027 (3 years).</li>
  <li>Postgraduate Degree (M.Sc.): 2027 to 2029 (2 years).</li>
  <li>Ph.D. Program: 2029 to 2034 (5 years).</li>
  <li>Total Time: 11 years to become a Research Biologist (by 2034).</li>
</ul>

<h2>Job Market Outlook for Biologists by 2030</h2>
<p>The demand for biologists is expected to grow with the increasing focus on healthcare, environmental conservation, and biotechnology. Biologists will play a key role in areas like genetics, pharmaceuticals, agriculture, and environmental science, making this a thriving field in the coming decade.</p>

<h1>Salary and Benefits for Biologists</h1>
<p><strong>Current Salary for Fresh Biologists (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹20,000 to ₹40,000 per month (depending on the industry and location).</li>
  <li>Additional Benefits: Health insurance, paid time off, and performance bonuses depending on the organization.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, the salary can range from ₹50,000 to ₹80,000 per month, depending on specialization and industry.</li>
</ul>

<h2>Salary Growth</h2>
<p>Biologists with specialized expertise in areas like biotechnology, bioinformatics, or environmental science may command higher salaries as the demand for these skills grows.</p>
<ul>
  <li>After 10 Years: ₹1,00,000 to ₹1,50,000 per month (depending on the sector and seniority).</li>
  <li>Research Biologists or those in senior academic roles may earn additional funding and grants, increasing their overall income.</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become a Biologist:</strong> Around 7 years (Path 1 with B.Sc. + M.Sc.) or 11 years (Path 2 with Ph.D.).</p>
<p><strong>Job Market Outlook:</strong> The job market for biologists is expected to grow significantly, driven by advancements in biotechnology, environmental conservation, and healthcare.</p>
<p><strong>Salary:</strong> Freshers can expect a starting salary of ₹20,000 to ₹40,000 per month, with opportunities for higher earnings with experience and specialization, reaching ₹1,00,000 to ₹1,50,000 after 10 years.</p>
`;}
    else if (grade === "10th" && career === "bank-manager") {
    guidanceContainer.innerHTML = `<h1>Paths to Become a Bank Manager from 10th Grade</h1>
<p>To become a Bank Manager after completing 10th grade, you need to follow a series of steps, focusing on education and entrance exams. Here are the available options:</p>

<h2>Path 1: 12th Grade (Commerce Stream) with Mathematics</h2>
<p><strong>Step 1:</strong> After completing 10th grade, choose the Commerce stream in 12th grade, with subjects like Mathematics, Economics, and Accountancy. This will help you build a strong foundation for a career in banking.</p>
<p><strong>Step 2:</strong> Complete your 12th grade with good marks, as it will be required for admission to undergraduate programs related to banking and finance.</p>

<h2>Path 2: Bachelor's Degree in Banking, Finance, or Commerce</h2>
<p><strong>Step 1:</strong> After completing 12th grade in Commerce, apply for a Bachelor's degree, such as B.Com (Bachelor of Commerce), BBA (Bachelor of Business Administration), or a specialized course in Banking or Finance.</p>
<p><strong>Step 2:</strong> After completing your Bachelor's degree (typically 3 years), you can pursue a Master's degree, such as an MBA (Master of Business Administration) with a specialization in Banking and Finance, which will further enhance your career prospects.</p>

<h2>Path 3: Bank Exams for Officer-Level Positions</h2>
<p><strong>Step 1:</strong> To become a Bank Manager, you need to first clear the bank exams conducted by organizations like IBPS (Institute of Banking Personnel Selection), SBI (State Bank of India), or other nationalized banks.</p>
<p><strong>Step 2:</strong> Prepare for exams such as the IBPS PO (Probationary Officer) exam, SBI PO exam, or RBI Officer exam. These exams assess your knowledge of quantitative aptitude, reasoning, English language, and general awareness.</p>

<h2>Entrance Exams for Bank Officer Positions</h2>
<ul>
  <li><strong>IBPS PO Exam:</strong> The exam conducted by IBPS for probationary officer positions in various banks. It is a crucial step toward becoming a bank officer and eventually a manager.</li>
  <li><strong>SBI PO Exam:</strong> Conducted by State Bank of India, this exam is one of the most popular bank exams for aspiring bank officers.</li>
  <li><strong>RBI Grade B Exam:</strong> The Reserve Bank of India conducts this exam for candidates aspiring for managerial positions in the banking sector.</li>
</ul>

<h2>Best Path</h2>
<p>The best path is to pursue a Bachelor's degree in Commerce or Business Administration (BBA), followed by preparing for bank exams like IBPS PO or SBI PO. This ensures a well-rounded education and a clear route toward becoming a Bank Manager.</p>

<h1>Time to Become a Bank Manager (From 2024)</h1>
<p><strong>Path 1 (12th Grade + Bachelor's Degree + Bank Exams):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Bachelor's Degree: 2026 to 2029 (3 years).</li>
  <li>Bank Exam Preparation: 2029 to 2030 (1 year).</li>
  <li>Total Time: 7 years to become a Bank Manager (by 2031).</li>
</ul>

<h1>Salary and Benefits for Bank Managers</h1>
<p><strong>Current Salary for Fresh Bank Managers (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹40,000 to ₹60,000 per month, depending on the bank and location.</li>
  <li>Additional Benefits: Health insurance, bonuses, retirement plans, and allowances for travel, accommodation, and more.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>After gaining experience and moving into a senior managerial role, salaries can range from ₹80,000 to ₹1,20,000 per month.</li>
</ul>

<h2>Salary Growth</h2>
<p>Bank Managers in senior positions, such as Branch Managers or Regional Managers, can earn higher salaries with additional benefits, including performance bonuses and perks.</p>
<ul>
  <li>After 10 Years: ₹1,50,000 to ₹2,00,000 per month (for senior management roles or leadership positions in the bank).</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become a Bank Manager:</strong> Approximately 7 years, depending on the path you choose (12th Grade + Bachelor's Degree + Bank Exam Preparation).</p>
<p><strong>Job Market Outlook:</strong> The banking sector in India is growing rapidly, with constant demand for qualified professionals. Becoming a Bank Manager is a promising career with growth opportunities.</p>
<p><strong>Salary:</strong> Starting salary ranges from ₹40,000 to ₹60,000 per month, with potential increases to ₹80,000 to ₹1,20,000 after 5 years, and up to ₹1,50,000 to ₹2,00,000 after 10 years in senior management positions.</p>
`;}
    else if (grade === "10th" && career === "business-consultant") {
                guidanceContainer.innerHTML = `<h1>Paths to Become a Business Consultant from 10th Grade</h1>
<p>To become a Business Consultant after completing 10th grade, you need to focus on education, skill-building, and gaining experience in business-related fields. Here's a step-by-step guide:</p>

<h2>Path 1: 12th Grade (Commerce Stream)</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for the Commerce stream in 12th grade. Subjects like Business Studies, Economics, and Accountancy will help you build a strong foundation for a career in business.</p>
<p><strong>Step 2:</strong> Complete your 12th grade with good marks. This will be crucial for admission to undergraduate programs in Business, Management, or related fields.</p>

<h2>Path 2: Bachelor's Degree in Business or Management</h2>
<p><strong>Step 1:</strong> After completing 12th grade in Commerce, pursue a Bachelor's degree like BBA (Bachelor of Business Administration), B.Com (Bachelor of Commerce), or a specialized course in Business Management.</p>
<p><strong>Step 2:</strong> Complete your Bachelor's degree (typically 3 years). This will provide you with essential knowledge in business, management, and economics, which are crucial for a career in consulting.</p>

<h2>Path 3: Master’s Degree in Business Administration (MBA)</h2>
<p><strong>Step 1:</strong> After completing your Bachelor's degree, pursue an MBA (Master of Business Administration) with a focus on Business Consulting, Strategy, or Management. This will enhance your consulting skills and business knowledge.</p>
<p><strong>Step 2:</strong> During your MBA, take courses or internships related to business consulting to gain practical exposure and develop a network in the industry.</p>

<h2>Skills Required for a Business Consultant</h2>
<ul>
  <li>Strong communication and presentation skills</li>
  <li>Problem-solving and analytical thinking</li>
  <li>Understanding of business operations, economics, and strategy</li>
  <li>Ability to work with different types of businesses</li>
  <li>Time management and project management skills</li>
</ul>

<h2>Path 4: Gain Experience through Internships or Entry-Level Jobs</h2>
<p><strong>Step 1:</strong> While pursuing your studies, take internships or entry-level positions in consulting firms, or any business-related roles to gain hands-on experience in the field.</p>
<p><strong>Step 2:</strong> These internships will help you understand the consulting process, client management, and business strategy development, which are crucial to becoming a successful business consultant.</p>

<h2>Business Consulting Certification Programs</h2>
<p>In addition to your education, you can also pursue specialized certification programs in business consulting to increase your chances of securing a job in this field. Some popular certifications include:</p>
<ul>
  <li><strong>Certified Management Consultant (CMC):</strong> A global certification program for consultants.</li>
  <li><strong>Business Consulting Certification by IIM (Indian Institute of Management):</strong> A specialized certification course for budding consultants.</li>
</ul>

<h2>Entrance Exams for MBA</h2>
<ul>
  <li><strong>CAT (Common Admission Test):</strong> The most popular entrance exam for MBA programs in India.</li>
  <li><strong>GMAT (Graduate Management Admission Test):</strong> Required for admission to top international MBA programs.</li>
  <li><strong>XAT (Xavier Aptitude Test):</strong> Another entrance exam for MBA programs in prestigious colleges in India.</li>
</ul>

<h1>Time to Become a Business Consultant (From 2024)</h1>
<p><strong>Path 1 (12th Grade + Bachelor’s Degree + MBA):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Bachelor's Degree: 2026 to 2029 (3 years).</li>
  <li>MBA: 2029 to 2031 (2 years).</li>
  <li>Total Time: 7 years to become a Business Consultant (by 2031).</li>
</ul>

<h1>Salary and Benefits for Business Consultants</h1>
<p><strong>Current Salary for Fresh Business Consultants (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹5,00,000 to ₹8,00,000 per year, depending on the consulting firm and location.</li>
  <li>Additional Benefits: Bonuses, performance incentives, health insurance, and travel allowances.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, business consultants can earn between ₹12,00,000 and ₹18,00,000 annually.</li>
</ul>

<h2>Salary Growth</h2>
<p>As a business consultant, your salary can significantly increase with more experience and specialization. Consultants with 10+ years of experience or in senior roles like Principal Consultant or Senior Strategy Consultant can earn salaries upwards of ₹30,00,000 annually.</p>

<h1>Summary</h1>
<p><strong>Time to Become a Business Consultant:</strong> Approximately 7 years, including the completion of 12th grade, a Bachelor's degree, and an MBA.</p>
<p><strong>Job Market Outlook:</strong> The demand for business consultants is high as companies look for professionals who can help them navigate market challenges and improve their operations.</p>
<p><strong>Salary:</strong> Starting salaries for fresh business consultants range from ₹5,00,000 to ₹8,00,000 per year, with the potential for significant growth as experience increases.</p>
`;}
    else if (grade === "10th" && career === "chef") {
                    guidanceContainer.innerHTML = `<h1>Paths to Become a Chef from 10th Grade</h1>
<p>Becoming a chef involves a combination of formal education, hands-on experience, and creativity. Here’s a step-by-step guide on how to pursue a career as a chef after completing 10th grade:</p>

<h2>Path 1: 12th Grade (Hotel Management or Culinary Arts)</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for the 12th grade in a stream that offers Hotel Management or Culinary Arts as an elective subject, if available. This will give you an early understanding of the basics of cooking and hospitality.</p>
<p><strong>Step 2:</strong> Complete your 12th grade with good marks, as this will be essential for admission to culinary schools or degree programs in hospitality management.</p>

<h2>Path 2: Culinary Diploma or Degree</h2>
<p><strong>Step 1:</strong> After completing 12th grade, enroll in a culinary diploma or degree program at a recognized institution. You can choose from courses like Diploma in Culinary Arts, Bachelor’s Degree in Hotel Management, or similar programs.</p>
<p><strong>Step 2:</strong> A culinary degree/diploma typically takes 1 to 3 years, during which you’ll learn the art of cooking, food safety, kitchen management, and presentation skills.</p>

<h2>Path 3: Apprenticeships and Internships</h2>
<p><strong>Step 1:</strong> Along with formal education, apprenticeships and internships in restaurants or hotels can help you gain hands-on experience. Working under an experienced chef will provide invaluable insights into professional kitchens.</p>
<p><strong>Step 2:</strong> Internships are often a part of culinary degree programs, allowing you to learn cooking techniques, plating, and working in a fast-paced environment.</p>

<h2>Skills Required for a Chef</h2>
<ul>
  <li>Excellent cooking and presentation skills</li>
  <li>Knowledge of various cuisines and culinary techniques</li>
  <li>Creativity and attention to detail</li>
  <li>Ability to work in a high-pressure environment</li>
  <li>Good communication and teamwork skills</li>
</ul>

<h2>Path 4: Specialized Courses in Culinary Arts</h2>
<p>After completing your degree or diploma, you can enhance your culinary expertise by enrolling in specialized courses such as:</p>
<ul>
  <li><strong>Baking and Pastry Arts:</strong> For those interested in desserts and bakery products.</li>
  <li><strong>International Cuisine:</strong> Focusing on cuisines from different parts of the world.</li>
  <li><strong>Nutrition and Food Safety:</strong> Essential for maintaining health standards in the kitchen.</li>
</ul>

<h2>Entrance Exams for Culinary Courses</h2>
<ul>
  <li><strong>NCHMCT JEE (National Council for Hotel Management and Catering Technology Joint Entrance Exam):</strong> For admission to Hotel Management and Culinary Arts courses.</li>
  <li><strong>CULINARY ART EXAMS by Various Institutes:</strong> Some culinary institutes conduct their own entrance exams for admission to their programs.</li>
</ul>

<h1>Time to Become a Chef (From 2024)</h1>
<p><strong>Path 1 (12th Grade + Culinary Degree/Diploma):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Culinary Degree/Diploma: 2026 to 2029 (1-3 years).</li>
  <li>Apprenticeship/Internship: 2026 to 2029 (part-time during the course).</li>
  <li>Total Time: 5 to 7 years to become a professional chef (by 2029-2031).</li>
</ul>

<h1>Salary and Benefits for Chefs</h1>
<p><strong>Current Salary for Fresh Chefs (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹2,50,000 to ₹4,00,000 per year, depending on the restaurant or hotel.</li>
  <li>Additional Benefits: Free meals, tips, and health insurance.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, chefs can earn between ₹8,00,000 and ₹12,00,000 annually, especially if they work in high-end restaurants or hotels.</li>
</ul>

<h2>Salary Growth</h2>
<p>Experienced chefs in senior roles such as Executive Chef or Head Chef can earn upwards of ₹20,00,000 annually, especially if they open their own restaurant or work in international establishments.</p>

<h1>Summary</h1>
<p><strong>Time to Become a Chef:</strong> Approximately 5 to 7 years, including completing 12th grade, a culinary degree or diploma, and gaining experience through internships and apprenticeships.</p>
<p><strong>Job Market Outlook:</strong> The demand for skilled chefs is growing in India and globally, especially with the rise in the food industry and the popularity of diverse cuisines.</p>
<p><strong>Salary:</strong> Starting salaries for fresh chefs range from ₹2,50,000 to ₹4,00,000 per year, with potential for significant salary growth as experience and expertise increase.</p>
`;}
    else if (grade === "10th" && career === "choreographer") {
                    guidanceContainer.innerHTML = `<h1>Paths to Become a Choreographer from 10th Grade</h1>
<p>Becoming a choreographer involves a combination of creativity, formal education, and experience. Here's a step-by-step guide to pursuing a career as a choreographer after completing 10th grade:</p>

<h2>Path 1: 12th Grade (Dance or Fine Arts)</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for the 12th grade in a stream that allows you to take dance or fine arts as an elective, if available. This will give you a foundation in artistic expression and the basics of dance and choreography.</p>
<p><strong>Step 2:</strong> Complete your 12th grade with good marks to gain access to specialized dance or choreography programs in college.</p>

<h2>Path 2: Dance Degree or Diploma</h2>
<p><strong>Step 1:</strong> After completing 12th grade, pursue a degree or diploma in dance or choreography. Institutes like the National Institute of Dance or other recognized institutions offer such courses that focus on choreography, various dance forms, and the technicalities involved in performing arts.</p>
<p><strong>Step 2:</strong> A degree or diploma in dance usually takes 3 to 4 years, during which you'll learn various dance styles, choreography techniques, and performance skills.</p>

<h2>Path 3: Dance Classes and Workshops</h2>
<p><strong>Step 1:</strong> Along with formal education, attend dance classes, workshops, and masterclasses to improve your technique and creativity. These will also allow you to explore various dance styles such as classical, contemporary, hip-hop, and others.</p>
<p><strong>Step 2:</strong> These workshops are important for building a strong foundation in choreography and learning from experienced professionals.</p>

<h2>Path 4: Internships and Performances</h2>
<p><strong>Step 1:</strong> Gaining practical experience is crucial in the dance industry. Look for internships or work opportunities with established choreographers, dance companies, or production houses.</p>
<p><strong>Step 2:</strong> Perform in dance shows, theater productions, or participate in dance competitions to get exposure and showcase your skills.</p>

<h2>Skills Required for a Choreographer</h2>
<ul>
  <li>Creativity and a good understanding of rhythm and music</li>
  <li>Ability to create dance routines and sequences</li>
  <li>Good understanding of different dance styles</li>
  <li>Strong communication and leadership skills for directing dancers</li>
  <li>Ability to work under pressure and in collaborative settings</li>
</ul>

<h2>Entrance Exams for Dance Courses</h2>
<ul>
  <li><strong>National Institute of Dance (NID) Entrance Exam:</strong> A popular choice for those pursuing dance studies in India.</li>
  <li><strong>Performing Arts College Entrance Exams:</strong> Many colleges offer entrance exams for dance or choreography courses.</li>
</ul>

<h1>Time to Become a Choreographer (From 2024)</h1>
<p><strong>Path 1 (12th Grade + Dance Degree/Diploma):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Dance Degree/Diploma: 2026 to 2029 (3-4 years).</li>
  <li>Internships/Performances: 2026 to 2029 (part-time during the course).</li>
  <li>Total Time: 5 to 6 years to become a professional choreographer (by 2029-2030).</li>
</ul>

<h1>Salary and Benefits for Choreographers</h1>
<p><strong>Current Salary for Fresh Choreographers (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹3,00,000 to ₹5,00,000 per year, depending on your experience and location.</li>
  <li>Additional Benefits: Exposure to high-profile events, TV shows, and film industry collaborations.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, choreographers can earn between ₹8,00,000 and ₹12,00,000 annually, especially when working with famous dance productions, shows, or film choreography.</li>
</ul>

<h2>Salary Growth</h2>
<p>As choreographers gain more experience and work on larger-scale productions like movies, TV shows, or music videos, their salary can grow significantly. Leading choreographers in the film industry or those owning their own dance academies can earn upwards of ₹20,00,000 annually.</p>

<h1>Summary</h1>
<p><strong>Time to Become a Choreographer:</strong> Approximately 5 to 6 years, including completing 12th grade, a dance degree/diploma, and gaining experience through internships and performances.</p>
<p><strong>Job Market Outlook:</strong> The demand for skilled choreographers is increasing in the entertainment industry, with opportunities in movies, TV shows, live performances, and more.</p>
<p><strong>Salary:</strong> Starting salaries for fresh choreographers range from ₹3,00,000 to ₹5,00,000 annually, with significant potential for growth as experience increases.</p>
`;}
    else if (grade === "10th" && career === "civil-engineer") {
                    guidanceContainer.innerHTML = `<h1>Paths to Become a Civil Engineer from 10th Grade</h1>
<p>Becoming a civil engineer involves pursuing formal education, followed by gaining practical experience. Here's a step-by-step guide to pursuing a career in civil engineering after completing 10th grade:</p>

<h2>Path 1: 12th Grade (Science Stream)</h2>
<p><strong>Step 1:</strong> After completing 10th grade, opt for the Science stream in 12th grade with subjects like Mathematics, Physics, and Chemistry. These subjects form the foundation of civil engineering concepts.</p>
<p><strong>Step 2:</strong> Complete your 12th grade with good marks to qualify for entrance exams and to get admission into a good engineering college.</p>

<h2>Path 2: Engineering Entrance Exams</h2>
<p><strong>Step 1:</strong> After completing 12th grade, you need to appear for engineering entrance exams. Some of the most common exams are:</p>
<ul>
  <li><strong>JEE Main:</strong> A national-level exam for admission to undergraduate engineering courses in India.</li>
  <li><strong>JEE Advanced:</strong> For admission to prestigious institutions like IITs (Indian Institutes of Technology).</li>
  <li><strong>State-level Entrance Exams:</strong> Many states have their own engineering exams for admission to local colleges.</li>
  <li><strong>Other Private Exams:</strong> Some private universities conduct their own entrance exams.</li>
</ul>
<p><strong>Step 2:</strong> Based on your performance in these exams, you can apply to various engineering colleges offering civil engineering programs.</p>

<h2>Path 3: Bachelor's Degree in Civil Engineering</h2>
<p><strong>Step 1:</strong> After clearing the entrance exams, pursue a 4-year Bachelor's degree in Civil Engineering (B.Tech or B.E.) from a recognized engineering college or university.</p>
<p><strong>Step 2:</strong> The program covers a variety of topics such as Structural Engineering, Transportation Engineering, Environmental Engineering, Geotechnical Engineering, and more.</p>

<h2>Path 4: Internships and Practical Experience</h2>
<p><strong>Step 1:</strong> While pursuing your engineering degree, look for internships or practical experience with construction companies, engineering firms, or government projects.</p>
<p><strong>Step 2:</strong> Internships provide valuable hands-on experience, helping you understand real-world applications of civil engineering concepts.</p>

<h2>Skills Required for a Civil Engineer</h2>
<ul>
  <li>Strong understanding of mathematics and physics</li>
  <li>Problem-solving and analytical skills</li>
  <li>Good knowledge of construction techniques and materials</li>
  <li>Proficiency in engineering software like AutoCAD, SAP2000, STAAD Pro</li>
  <li>Excellent communication and teamwork skills</li>
</ul>

<h2>Entrance Exams for Civil Engineering</h2>
<ul>
  <li><strong>JEE Main:</strong> Required for admission to most engineering colleges in India.</li>
  <li><strong>JEE Advanced:</strong> For admission to IITs.</li>
  <li><strong>State-Level Exams:</strong> For admission to local engineering colleges in specific states.</li>
  <li><strong>Private University Exams:</strong> For admission to private engineering colleges.</li>
</ul>

<h1>Time to Become a Civil Engineer (From 2024)</h1>
<p><strong>Step 1 (12th Grade + Entrance Exams):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Preparation and Entrance Exams: 2026 (6 months to 1 year).</li>
  <li>Bachelor's Degree in Civil Engineering: 2026 to 2030 (4 years).</li>
  <li>Internships/Experience: During the course (part-time).</li>
  <li>Total Time: 6 to 7 years to become a professional civil engineer (by 2030-2031).</li>
</ul>

<h1>Salary and Benefits for Civil Engineers</h1>
<p><strong>Current Salary for Fresh Civil Engineers (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹4,00,000 to ₹6,00,000 per year, depending on the company and location.</li>
  <li>Additional Benefits: Medical benefits, job stability, and opportunities for professional growth.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, civil engineers can earn between ₹8,00,000 and ₹12,00,000 annually, especially in higher-level positions or with multinational companies.</li>
</ul>

<h2>Salary Growth</h2>
<p>As civil engineers gain more experience, particularly in project management, design, or consulting roles, their salary can grow significantly. Experienced civil engineers can earn upwards of ₹20,00,000 annually, especially in senior or leadership positions.</p>

<h1>Summary</h1>
<p><strong>Time to Become a Civil Engineer:</strong> Approximately 6 to 7 years, including completing 12th grade, a Bachelor's degree in Civil Engineering, and gaining experience through internships.</p>
<p><strong>Job Market Outlook:</strong> The demand for civil engineers remains strong in construction, infrastructure, and urban development projects.</p>
<p><strong>Salary:</strong> Starting salaries for fresh civil engineers range from ₹4,00,000 to ₹6,00,000 annually, with potential for growth as experience increases.</p>
`;}
    else if (grade === "10th" && career === "cbi") {
            guidanceContainer.innerHTML = `<h1>Paths to Join the CBI (Central Bureau of Investigation) from 10th Grade</h1>
<p>Becoming an officer in the CBI involves pursuing higher education, followed by clearing entrance exams and training. Here's a step-by-step guide to pursuing a career with the CBI after completing 10th grade:</p>

<h2>Path 1: 12th Grade (Any Stream)</h2>
<p><strong>Step 1:</strong> After completing 10th grade, you can choose any stream (Science, Commerce, or Arts) for your 12th grade. However, choosing subjects related to law, criminal justice, or public administration in your 12th grade may be beneficial.</p>
<p><strong>Step 2:</strong> Complete your 12th grade with good marks to pursue undergraduate education and qualify for entrance exams.</p>

<h2>Path 2: Undergraduate Degree (Bachelor's Degree)</h2>
<p><strong>Step 1:</strong> After completing 12th grade, you need to pursue an undergraduate degree (Bachelor’s degree). While there is no specific degree required to join the CBI, a Bachelor's degree in fields such as Law, Criminology, Forensic Science, or Political Science will be helpful.</p>
<p><strong>Step 2:</strong> Complete your graduation, maintaining a good academic record to prepare for competitive exams and interviews.</p>

<h2>Path 3: Civil Services Examination (CSE) or SSC CGL</h2>
<p><strong>Step 1:</strong> The most common route to join CBI is through the Staff Selection Commission (SSC) Combined Graduate Level (CGL) exam. You can appear for the SSC CGL exam after completing your Bachelor's degree.</p>
<p><strong>Step 2:</strong> Alternatively, you can take the Civil Services Examination (CSE) conducted by UPSC, as some CBI officers are recruited through this route as well.</p>

<h2>Path 4: SSC CGL Exam for CBI Sub-Inspector (SI) Role</h2>
<p><strong>Step 1:</strong> After completing your graduation, you can apply for the SSC CGL exam to join the CBI as a Sub-Inspector (SI).</p>
<p><strong>Step 2:</strong> The selection process for CBI SI involves a written examination, physical endurance test, and an interview.</p>

<h2>Training and Posting</h2>
<p><strong>Step 1:</strong> Once selected for the CBI, you will undergo training at the CBI Academy in Ghaziabad, where you will be trained in criminal law, investigation techniques, forensic science, and other related subjects.</p>
<p><strong>Step 2:</strong> After successful completion of training, you will be posted as a CBI officer and can begin working on cases related to corruption, serious crimes, terrorism, and more.</p>

<h2>Skills Required for CBI Officers</h2>
<ul>
  <li>Strong analytical and investigative skills</li>
  <li>Knowledge of criminal law and legal procedures</li>
  <li>Excellent communication and interviewing skills</li>
  <li>Problem-solving and decision-making abilities</li>
  <li>Physical and mental fitness</li>
</ul>

<h2>Entrance Exams for CBI</h2>
<ul>
  <li><strong>SSC CGL Exam:</strong> Required to join CBI as a Sub-Inspector (SI) or Assistant Sub-Inspector (ASI).</li>
  <li><strong>Civil Services Examination (CSE):</strong> Can be an alternative route for joining CBI in higher positions through UPSC.</li>
</ul>

<h1>Time to Join the CBI (From 2024)</h1>
<p><strong>Step 1 (12th Grade + Entrance Exams):</strong></p>
<ul>
  <li>12th Grade: 2024 to 2026 (2 years).</li>
  <li>Graduation: 2026 to 2029 (3 years).</li>
  <li>Preparation for SSC CGL or UPSC Exams: 2029 to 2030 (1 year).</li>
  <li>Joining CBI: By 2031 after successfully clearing the exam and training.</li>
</ul>

<h1>Salary and Benefits for CBI Officers</h1>
<p><strong>Current Salary for CBI Sub-Inspector (2024):</strong></p>
<ul>
  <li>Starting Salary: ₹35,000 to ₹45,000 per month, depending on the location and experience.</li>
  <li>Additional Benefits: Medical facilities, housing allowance, travel allowance, and job security.</li>
</ul>

<p><strong>Expected Salary after 5 Years (by 2029):</strong></p>
<ul>
  <li>With experience, CBI officers can earn between ₹60,000 and ₹80,000 per month, depending on their position and seniority.</li>
</ul>

<h2>Salary Growth</h2>
<p>With promotions, especially to roles like Inspector, Senior Inspector, and Assistant Director, the salary of a CBI officer can grow significantly, ranging from ₹1,00,000 to ₹2,00,000 per month, especially for officers posted in specialized units or handling high-profile cases.</p>

<h1>Summary</h1>
<p><strong>Time to Join the CBI:</strong> Approximately 7 to 8 years, including completing 12th grade, graduation, and passing the SSC CGL or UPSC exams, along with training.</p>
<p><strong>Job Market Outlook:</strong> CBI is one of the most prestigious law enforcement agencies in India, and the demand for qualified and skilled officers remains high.</p>
<p><strong>Salary:</strong> Starting salaries for CBI Sub-Inspectors range from ₹35,000 to ₹45,000 per month, with potential for growth as experience and promotions increase.</p>
`;}
    else if (grade === "10th" && career === "cricketer") {
                guidanceContainer.innerHTML = `<h1>Paths to Become a Cricketer from 10th Grade</h1>
<p>Becoming a professional cricketer requires dedication, skill development, and proper training. Here's a guide to pursuing a career in cricket after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>After completing your 10th grade, you can choose any stream (Science, Commerce, or Arts) in your 11th grade. However, pursuing any stream is not restrictive for your cricket career as sports training will be your main focus.</p>

<h2>Step 2: Join a Cricket Academy</h2>
<p><strong>Step 1:</strong> Enroll in a reputed cricket academy where you will receive professional coaching to develop your skills. It's essential to start training at an early stage for a successful career.</p>
<p><strong>Step 2:</strong> Focus on specific skills like batting, bowling, or wicketkeeping based on your interest and natural talent. Attend regular practice sessions and participate in local matches to gain experience.</p>

<h2>Step 3: Participate in Local Tournaments</h2>
<p><strong>Step 1:</strong> Start playing for local clubs or school teams to get exposure to competitive cricket. Participate in district and state-level tournaments to showcase your talent.</p>
<p><strong>Step 2:</strong> Keep improving your game and strive to perform well in these tournaments to catch the attention of selectors and coaches.</p>

<h2>Step 4: District/State Level Selection</h2>
<p><strong>Step 1:</strong> After gaining experience in local tournaments, try for district-level or state-level trials. Selection at this stage is crucial to progressing to higher levels of competitive cricket.</p>
<p><strong>Step 2:</strong> Perform exceptionally well to earn a spot on your state cricket team, which can open the door to higher-level opportunities like national selection.</p>

<h2>Step 5: National Selection</h2>
<p><strong>Step 1:</strong> If you excel at the state-level, there are opportunities for national selection. National selectors often scout for young talents during Ranji Trophy, Vijay Hazare, or other major domestic cricket tournaments.</p>
<p><strong>Step 2:</strong> Participate in these national-level tournaments and perform consistently to catch the attention of national selectors.</p>

<h2>Step 6: Joining IPL or International Cricket Team</h2>
<p><strong>Step 1:</strong> After excelling at the domestic level, if you perform consistently, you may get an opportunity to play in the Indian Premier League (IPL), which is one of the biggest platforms for young cricketers.</p>
<p><strong>Step 2:</strong> Perform well in IPL or other national tournaments to get selected for the Indian National Cricket Team.</p>

<h2>Skills Required to Become a Cricketer</h2>
<ul>
  <li>Strong physical fitness and stamina</li>
  <li>Good hand-eye coordination and reflexes</li>
  <li>Skill in batting, bowling, or wicketkeeping</li>
  <li>Strategic thinking and teamwork abilities</li>
  <li>Strong mental toughness to handle high-pressure situations</li>
</ul>

<h2>Salary for a Cricketer</h2>
<p><strong>Starting Salary (2024):</strong> The salary for a new cricketer can vary based on the league (such as IPL) and performance. For IPL players, the salary can range from ₹20 lakhs to ₹1 crore, depending on their talent and market value.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With consistent performance, you can earn more in IPL or as a member of the Indian team. The salary for international cricketers can range from ₹50 lakh to ₹5 crore per year, along with endorsement deals.</p>

<h2>Time to Become a Professional Cricketer</h2>
<ul>
  <li>Joining a Cricket Academy: 2024-2025 (1 year)</li>
  <li>Playing Local and District-Level Tournaments: 2025-2027 (2 years)</li>
  <li>State and National Level Selection: 2027-2028 (1 year)</li>
  <li>Playing in IPL and International Cricket: By 2029 (after 5 years)</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become a Cricketer:</strong> Approximately 5 years of dedication, training, and performance in local, district, state, and national tournaments.</p>
<p><strong>Job Market Outlook:</strong> The demand for cricketers in domestic leagues like IPL and international cricket remains strong, with new opportunities arising each year.</p>
<p><strong>Salary:</strong> Starting salaries for professional cricketers can range from ₹20 lakh to ₹1 crore per year, with potential for growth based on performance and endorsements.</p>
`;}
    else if (grade === "10th" && career === "data-scientist") {
            guidanceContainer.innerHTML = `<h1>Paths to Become a Data Scientist from 10th Grade</h1>
<p>Becoming a data scientist is an exciting and rewarding career choice. Here's a step-by-step guide to pursuing a career in data science after completing your 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>After completing your 10th grade, you can choose any stream (Science, Commerce, or Arts) in your 11th grade. However, selecting the Science stream with subjects like Mathematics and Computer Science will be beneficial for a career in data science.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>In your 11th and 12th grades, opt for subjects like Mathematics, Computer Science, and Physics. These subjects will lay the foundation for the technical knowledge required in data science.</p>

<h2>Step 3: Pursue a Bachelor's Degree</h2>
<p>After completing 12th grade, pursue a Bachelor's degree in a relevant field. Some of the popular degree options for aspiring data scientists include:</p>
<ul>
  <li>Bachelor's in Computer Science (B.Tech, B.Sc)</li>
  <li>Bachelor's in Mathematics or Statistics</li>
  <li>Bachelor's in Data Science or Artificial Intelligence</li>
  <li>Bachelor's in Information Technology</li>
</ul>
<p>During your undergraduate degree, focus on gaining knowledge in programming languages, mathematics, and statistical techniques.</p>

<h2>Step 4: Learn Programming and Data Science Tools</h2>
<p>To become proficient in data science, you must learn programming languages and tools commonly used in the field:</p>
<ul>
  <li><strong>Python:</strong> The most commonly used programming language for data science due to its simplicity and vast libraries like Pandas, NumPy, and SciPy.</li>
  <li><strong>R:</strong> Another popular language for statistical computing and data analysis.</li>
  <li><strong>SQL:</strong> Learn SQL to manage and query databases.</li>
  <li><strong>Machine Learning:</strong> Understand machine learning algorithms and techniques.</li>
  <li><strong>Data Visualization Tools:</strong> Tools like Tableau, Power BI, or matplotlib help visualize data trends and insights.</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>Start working on real-world data analysis projects to apply your knowledge. Participate in internships or freelance work to gain practical experience. You can also work on personal projects using datasets available online.</p>
<p>Some project ideas include:</p>
<ul>
  <li>Predicting housing prices using machine learning</li>
  <li>Analyzing customer behavior data</li>
  <li>Building recommendation systems for e-commerce</li>
</ul>

<h2>Step 6: Master Data Science Techniques</h2>
<p>As you progress, it's essential to dive deeper into advanced data science techniques such as:</p>
<ul>
  <li>Data cleaning and preprocessing</li>
  <li>Exploratory data analysis (EDA)</li>
  <li>Supervised and unsupervised learning</li>
  <li>Deep learning and neural networks</li>
  <li>Natural language processing (NLP)</li>
</ul>

<h2>Step 7: Apply for Data Science Roles</h2>
<p>After gaining knowledge and practical experience, you can start applying for data science positions. Some entry-level roles you can apply for include:</p>
<ul>
  <li>Data Analyst</li>
  <li>Junior Data Scientist</li>
  <li>Machine Learning Engineer</li>
</ul>
<p>As you gain experience, you can progress to senior roles like Senior Data Scientist, Data Science Manager, or Data Architect.</p>

<h2>Skills Required to Become a Data Scientist</h2>
<ul>
  <li>Strong foundation in mathematics and statistics</li>
  <li>Proficiency in programming languages like Python, R, and SQL</li>
  <li>Understanding of machine learning algorithms</li>
  <li>Data wrangling and cleaning skills</li>
  <li>Experience with data visualization tools</li>
  <li>Critical thinking and problem-solving abilities</li>
</ul>

<h2>Salary for a Data Scientist</h2>
<p><strong>Starting Salary (2024):</strong> The salary for an entry-level data scientist can range from ₹5 lakh to ₹10 lakh per year, depending on the company and location.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, a data scientist can earn anywhere between ₹15 lakh to ₹30 lakh per year, depending on their expertise and role within the company.</p>

<h2>Time to Become a Professional Data Scientist</h2>
<ul>
  <li>Complete 10th and 12th Grade: 2024-2026 (2 years)</li>
  <li>Pursue Bachelor's Degree: 2026-2029 (3 years)</li>
  <li>Learn Data Science Tools and Techniques: 2026-2029 (During Bachelor's Degree)</li>
  <li>Start Working as a Data Scientist: By 2029 (after 5 years)</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become a Data Scientist:</strong> Approximately 5-6 years of education, learning programming, gaining practical experience, and mastering data science techniques.</p>
<p><strong>Job Market Outlook:</strong> The demand for data scientists continues to grow as more industries adopt data-driven decision-making. With the rise of big data and AI technologies, the career prospects for data scientists are promising.</p>
<p><strong>Salary:</strong> Starting salaries for data scientists range from ₹5 lakh to ₹10 lakh per year, with potential growth to ₹15 lakh to ₹30 lakh per year based on experience and expertise.</p>
`;}
    else if (grade === "10th" && career === "dentist") {
            guidanceContainer.innerHTML = `<h1>Paths to Become a Dentist from 10th Grade</h1>
<p>Becoming a dentist is a rewarding and respected career choice. Here's a step-by-step guide to pursuing a career in dentistry after completing your 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>After completing your 10th grade, you can choose any stream (Science, Commerce, or Arts) in your 11th grade. However, selecting the Science stream with subjects like Biology, Chemistry, and Physics will be essential for a career in dentistry.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>In your 11th and 12th grades, opt for the Science stream with subjects like Biology, Chemistry, and Physics. These subjects are crucial for understanding the human body, dental anatomy, and medical principles related to dentistry.</p>

<h2>Step 3: Pursue a Bachelor's Degree in Dental Surgery (BDS)</h2>
<p>After completing 12th grade, the next step is to pursue a Bachelor's degree in Dental Surgery (BDS). The BDS program is typically a 5-year course that includes both theoretical and practical training in dentistry.</p>

<h2>Step 4: Entrance Exams</h2>
<p>To get admission to BDS programs in reputed colleges, you need to clear relevant entrance exams. Some of the popular entrance exams for dental admissions include:</p>
<ul>
  <li><strong>NEET (National Eligibility cum Entrance Test):</strong> This is the most common entrance exam for admission to medical and dental colleges in India.</li>
  <li><strong>AIIMS (All India Institute of Medical Sciences) Dental Exam:</strong> AIIMS also conducts its own entrance exam for dental courses, which is highly competitive.</li>
  <li><strong>State-Level Dental Exams:</strong> Many states conduct their own exams for admissions to dental colleges within the state.</li>
</ul>

<h2>Step 5: Complete the BDS Program</h2>
<p>Once you have successfully cleared the entrance exam, you will get admission to a BDS program. The course includes practical training in various dental procedures, clinical exposure, and knowledge of dental anatomy, oral hygiene, restorative dentistry, and surgical skills.</p>

<h2>Step 6: Internship and Practical Training</h2>
<p>During the final year of the BDS program, students are required to complete an internship. This hands-on experience helps students understand real-world dental procedures and gain practical skills under the supervision of experienced professionals.</p>

<h2>Step 7: Obtain License to Practice</h2>
<p>After completing your BDS, you need to obtain a license from the Dental Council of India (DCI) or the respective State Dental Council to practice dentistry legally.</p>

<h2>Step 8: Specialization (Optional)</h2>
<p>If you wish to specialize in a specific area of dentistry, you can pursue a Master of Dental Surgery (MDS) in areas like:</p>
<ul>
  <li>Orthodontics (braces and teeth alignment)</li>
  <li>Periodontology (gum disease treatment)</li>
  <li>Oral Surgery (tooth extractions and surgeries)</li>
  <li>Prosthodontics (crowns, bridges, dentures)</li>
  <li>Pediatric Dentistry (child dental care)</li>
</ul>

<h2>Step 9: Job Opportunities</h2>
<p>Once you have completed your BDS (and MDS if you choose to specialize), you can start working as a dentist. Some of the career options include:</p>
<ul>
  <li>Private Practice (setting up your own dental clinic)</li>
  <li>Working in Hospitals or Dental Clinics</li>
  <li>Academic Careers (teaching in dental colleges)</li>
  <li>Research in Dentistry</li>
  <li>Working with Government Health Services</li>
</ul>

<h2>Skills Required to Become a Dentist</h2>
<ul>
  <li>Strong understanding of human anatomy, particularly the mouth and teeth</li>
  <li>Manual dexterity for performing delicate dental procedures</li>
  <li>Excellent communication skills to explain procedures to patients</li>
  <li>Attention to detail</li>
  <li>Problem-solving and critical thinking abilities</li>
  <li>Compassion and patience to deal with anxious patients</li>
</ul>

<h2>Salary for a Dentist</h2>
<p><strong>Starting Salary (2024):</strong> The salary for an entry-level dentist in India can range from ₹3 lakh to ₹7 lakh per year, depending on location and expertise.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience and specialization, a dentist can earn anywhere between ₹8 lakh to ₹20 lakh per year, depending on their practice and reputation.</p>

<h2>Time to Become a Dentist</h2>
<ul>
  <li>Complete 10th and 12th Grade: 2024-2026 (2 years)</li>
  <li>Pursue BDS: 2026-2031 (5 years)</li>
  <li>Specialization (Optional): 2031-2033 (2 years)</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become a Dentist:</strong> Approximately 5-7 years of education, training, and practical experience to become a licensed dentist.</p>
<p><strong>Job Market Outlook:</strong> The demand for qualified dentists remains strong, as oral health is an essential part of overall health care. There are numerous job opportunities both in private and public sectors.</p>
<p><strong>Salary:</strong> Starting salaries for dentists range from ₹3 lakh to ₹7 lakh per year, with potential growth to ₹8 lakh to ₹20 lakh per year, especially if specializing in a particular area of dentistry.</p>
`;}
    else if (grade === "10th" && career === "defense") {
            guidanceContainer.innerHTML = `<h1>Paths to Join the Defense Forces from 10th Grade</h1>
<p>The defense sector offers a prestigious and fulfilling career. If you aspire to serve the nation through the defense forces, here’s a guide on how to pursue a career in defense after completing your 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>After completing your 10th grade, you will need to choose the right educational path depending on which branch of the defense you wish to join.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>To pursue a career in defense, it is advisable to opt for the Science stream in your 11th and 12th grades, as most defense services require knowledge of subjects like Physics, Mathematics, and English. Some defense exams also focus on technical skills and knowledge related to these subjects.</p>

<h2>Step 3: Prepare for Entrance Exams</h2>
<p>To join the defense forces, you must pass certain entrance exams. Some of the most common exams include:</p>
<ul>
  <li><strong>National Defence Academy (NDA) Exam:</strong> The NDA exam is one of the most popular and competitive exams to join the Indian Army, Navy, or Air Force. After 12th, you can appear for the NDA exam, which is conducted by the Union Public Service Commission (UPSC).</li>
  <li><strong>Technical Entry Scheme (TES):</strong> For candidates who wish to join the Indian Army as technical officers, the TES exam is an option. It is conducted by the Indian Army and is open to students after completing 12th with Physics and Mathematics.</li>
  <li><strong>Indian Air Force (AFCAT):</strong> The Air Force Common Admission Test (AFCAT) is for those aspiring to join the Indian Air Force as an officer. After graduation, you can appear for this exam to join the flying branch or ground duty branches.</li>
  <li><strong>Indian Navy (SSR/AA):</strong> For candidates aspiring to join the Indian Navy as Sailors, the Senior Secondary Recruit (SSR) and Artificer Apprentice (AA) exams are available.</li>
  <li><strong>Technical and Non-Technical Recruitment Exams:</strong> The Indian Army, Navy, and Air Force conduct recruitment exams for various technical and non-technical roles after the 12th grade. The exams are based on specific recruitment notifications issued by the respective defense forces.</li>
</ul>

<h2>Step 4: Qualify the Medical Examination</h2>
<p>Once you clear the written exam, you will have to undergo a thorough medical examination. This is a crucial step, as candidates must meet certain physical and medical standards to join the defense forces. The medical check-up ensures that you are physically fit for the demanding lifestyle of a defense officer.</p>

<h2>Step 5: Join the Academy for Training</h2>
<p>After successfully passing the entrance exams and medical tests, you will be called for training at one of the defense academies. Some of the well-known defense academies include:</p>
<ul>
  <li><strong>National Defence Academy (NDA), Pune:</strong> This is a joint services academy where cadets receive training for all three branches—Army, Navy, and Air Force.</li>
  <li><strong>Indian Military Academy (IMA), Dehradun:</strong> IMA is for candidates joining the Indian Army as officers.</li>
  <li><strong>Air Force Academy (AFA), Hyderabad:</strong> For those joining the Indian Air Force as officers.</li>
  <li><strong>Naval Academy, Ezhimala:</strong> For those joining the Indian Navy as officers.</li>
</ul>

<h2>Step 6: Serve in the Defense Forces</h2>
<p>Upon completion of your training, you will be commissioned as an officer in the respective branch of the defense forces. As an officer, you will serve your nation by performing various duties, which include defending the country, participating in peacekeeping missions, and contributing to national security.</p>

<h2>Step 7: Career Advancement</h2>
<p>After joining the defense forces, you will have opportunities for further education, advanced training, and promotions based on your performance, qualifications, and experience. The defense forces offer a structured career path with various ranks, and you can rise to higher positions with dedication and service.</p>

<h2>Skills Required for a Defense Career</h2>
<ul>
  <li>Physical fitness and endurance</li>
  <li>Strong leadership and decision-making skills</li>
  <li>Ability to work under pressure</li>
  <li>Teamwork and discipline</li>
  <li>Problem-solving and critical thinking abilities</li>
</ul>

<h2>Salary for a Defense Officer</h2>
<p><strong>Starting Salary (2024):</strong> The salary for an entry-level officer in the Indian Army, Navy, or Air Force can range from ₹60,000 to ₹80,000 per month, depending on the branch and rank.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With promotions, the salary can increase to ₹1 lakh to ₹1.5 lakh per month, along with additional allowances and benefits.</p>

<h2>Time to Join the Defense Forces</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade and Appear for NDA or other exams: 2026</li>
  <li>Complete Training at the Academy: 2026-2028</li>
  <li>Start Serving in the Defense Forces: 2028 onwards</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Join the Defense Forces:</strong> It will take about 2-3 years to join the defense forces after completing 12th grade, depending on the entrance exam, medical tests, and academy training.</p>
<p><strong>Job Market Outlook:</strong> The defense sector offers stable and prestigious career options with continuous job opportunities. There is a high demand for capable individuals to serve in the armed forces.</p>
<p><strong>Salary:</strong> Entry-level salaries start from ₹60,000 to ₹80,000 per month, with further growth potential depending on rank and experience.</p>
`;}
    else if (grade === "10th" && career === "electrical-engineer") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming an Electrical Engineer After 10th Grade</h1>
<p>Electrical engineering is a dynamic and rewarding field with applications in power generation, electronics, telecommunications, and more. Here’s a step-by-step guide to pursuing a career as an electrical engineer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Ensure you have a strong foundation in mathematics and science, as these subjects are crucial for understanding electrical engineering concepts.</p>

<h2>Step 2: Choose a Science Stream in 11th Grade</h2>
<p>Select the Science stream with Physics, Chemistry, and Mathematics (PCM) as your core subjects in 11th and 12th grades. These subjects are mandatory for pursuing an engineering career.</p>

<h2>Step 3: Prepare for Entrance Exams</h2>
<p>To secure admission to an electrical engineering program, you will need to appear for competitive entrance exams after your 12th grade:</p>
<ul>
  <li><strong>JEE Main and JEE Advanced:</strong> These national-level exams are required for admission to prestigious institutes like IITs, NITs, and IIITs.</li>
  <li><strong>State-Level Entrance Exams:</strong> Examples include WBJEE, MHT-CET, and AP EAMCET, which provide access to state engineering colleges.</li>
  <li><strong>Private University Exams:</strong> Some universities conduct their own entrance exams, such as SRMJEEE, VITEEE, and BITSAT.</li>
</ul>

<h2>Step 4: Pursue a Bachelor’s Degree in Electrical Engineering</h2>
<p>After clearing the entrance exams, enroll in a B.Tech or B.E. program in Electrical Engineering at a recognized institution. This program typically lasts 4 years and covers subjects like:</p>
<ul>
  <li>Electric Circuits</li>
  <li>Power Systems</li>
  <li>Control Systems</li>
  <li>Electrical Machines</li>
  <li>Electronics and Communication</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>Participate in internships, projects, and hands-on training during your degree to gain practical exposure. This experience will enhance your employability and understanding of the field.</p>

<h2>Step 6: Consider Higher Education (Optional)</h2>
<p>After completing your bachelor’s degree, you can pursue a master’s degree (M.Tech/MS) or specialization in fields like renewable energy, robotics, or power systems for advanced career opportunities.</p>

<h2>Skills Required for an Electrical Engineer</h2>
<ul>
  <li>Strong analytical and problem-solving skills</li>
  <li>Proficiency in mathematics and physics</li>
  <li>Attention to detail and precision</li>
  <li>Knowledge of electrical systems and tools</li>
  <li>Teamwork and communication skills</li>
</ul>

<h2>Salary of an Electrical Engineer</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level electrical engineers in India can earn between ₹3 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience and expertise, salaries can increase to ₹8 lakh to ₹12 lakh per annum.</p>

<h2>Time to Become an Electrical Engineer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete B.Tech/B.E. in Electrical Engineering: 2026-2030</li>
  <li>Begin Professional Career: 2030</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for electrical engineers is high in sectors like power generation, construction, manufacturing, and renewable energy. With advancements in technology, opportunities in automation and smart grids are also expanding.</p>

<h1>Summary</h1>
<p><strong>Time to Become an Electrical Engineer:</strong> It will take approximately 6 years after 10th grade to start your career as an electrical engineer.</p>
<p><strong>Job Market Outlook:</strong> The field of electrical engineering offers stable and lucrative career opportunities, with increasing demand in both traditional and emerging industries.</p>
<p><strong>Salary:</strong> Entry-level salaries range from ₹3 lakh to ₹6 lakh per annum, with significant growth potential based on experience and specialization.</p>
`;}
else if (grade === "10th" && career === "director") {
    guidanceContainer.innerHTML = `<h1>Path to Becoming a Film Director After 10th Grade</h1>
<p>Becoming a film director is a creative and ambitious journey that combines artistic vision, storytelling, and technical expertise. Here’s a step-by-step guide to achieving this career after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on developing a love for storytelling, literature, and visual arts during your schooling. These are foundational skills for a film director.</p>

<h2>Step 2: Choose the Right Stream in 11th Grade</h2>
<p>Select any stream (Arts, Commerce, or Science) based on your interests, as filmmaking is not restricted to specific subjects. However, studying humanities with subjects like English, History, or Fine Arts can provide a creative edge.</p>

<h2>Step 3: Explore Filmmaking Basics</h2>
<p>Begin exploring filmmaking through extracurricular activities, short film projects, or online courses during your high school years. Learn about:</p>
<ul>
  <li>Scriptwriting</li>
  <li>Cinematography</li>
  <li>Editing</li>
  <li>Acting and Direction</li>
</ul>

<h2>Step 4: Pursue a Bachelor’s Degree in Filmmaking or Related Fields</h2>
<p>After 12th grade, enroll in a degree program in filmmaking, direction, or mass communication. Popular courses include:</p>
<ul>
  <li>Bachelor of Fine Arts (BFA) in Filmmaking</li>
  <li>Bachelor of Mass Media (BMM)</li>
  <li>Bachelor’s in Film and Television Production</li>
</ul>
<p>Renowned institutions offering film courses in India include:</p>
<ul>
  <li>Film and Television Institute of India (FTII), Pune</li>
  <li>Satyajit Ray Film and Television Institute (SRFTI), Kolkata</li>
  <li>Whistling Woods International, Mumbai</li>
  <li>National Institute of Design (NID), Ahmedabad</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>Work as an assistant director or intern in film productions to understand the intricacies of directing. This hands-on experience is crucial for learning on the job.</p>

<h2>Step 6: Build a Portfolio</h2>
<p>Create short films, documentaries, or independent projects to showcase your skills and vision. A strong portfolio is essential to gain recognition and opportunities in the industry.</p>

<h2>Step 7: Continue Learning</h2>
<p>Attend workshops, film festivals, and seminars to stay updated with trends and network with professionals in the industry.</p>

<h2>Step 8: Consider Advanced Studies (Optional)</h2>
<p>Pursue advanced courses in film direction or specialization in areas like screenwriting, cinematography, or sound design at reputed institutions in India or abroad.</p>

<h2>Skills Required for a Film Director</h2>
<ul>
  <li>Creative storytelling and vision</li>
  <li>Leadership and team management</li>
  <li>Technical knowledge of cameras, lighting, and editing</li>
  <li>Strong communication skills</li>
  <li>Problem-solving and adaptability</li>
</ul>

<h2>Salary of a Film Director</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level film directors or assistant directors can earn between ₹2 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With successful projects, directors can earn ₹10 lakh to ₹50 lakh or more annually, depending on the scale of films.</p>

<h2>Time to Become a Film Director</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Work as Assistant Director and Build Portfolio: 2029-2032</li>
  <li>Begin Directing Films: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The film industry is ever-growing, with opportunities in Bollywood, regional cinema, television, OTT platforms, and advertisements. Creativity and persistence are key to thriving in this competitive field.</p>

<h1>Summary</h1>
<p><strong>Time to Become a Film Director:</strong> It will take approximately 8-10 years after 10th grade to establish yourself as a film director.</p>
<p><strong>Job Market Outlook:</strong> With increasing demand for content on OTT platforms and regional cinema, opportunities for directors are expanding.</p>
<p><strong>Salary:</strong> Entry-level salaries range from ₹2 lakh to ₹6 lakh per annum, with significant growth potential based on success and recognition.</p>
`;}
    else if (grade === "10th" && career === "actor") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming an Actor After 10th Grade</h1>
<p>Becoming an actor requires a blend of passion, talent, and dedication to the craft. Here’s a step-by-step guide for pursuing a career in acting after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>While in school, participate in extracurricular activities such as drama clubs, stage performances, and local theater groups to develop acting skills and gain confidence.</p>

<h2>Step 2: Choose a Suitable Stream in 11th Grade</h2>
<p>Select any stream (Arts, Commerce, or Science) based on your interests, as acting is not dependent on academic subjects. However, studying subjects like Fine Arts or English can help with creative expression.</p>

<h2>Step 3: Join Acting Classes or Workshops</h2>
<p>Enroll in acting workshops or classes to learn the basics of acting, such as:</p>
<ul>
  <li>Voice modulation</li>
  <li>Body language</li>
  <li>Character building</li>
  <li>Improvisation</li>
</ul>
<p>These programs will help you refine your skills and understand the nuances of the acting profession.</p>

<h2>Step 4: Pursue a Bachelor’s Degree in Acting or Performing Arts</h2>
<p>After completing 12th grade, consider enrolling in courses such as:</p>
<ul>
  <li>Bachelor of Performing Arts (BPA)</li>
  <li>Diploma in Acting</li>
  <li>Bachelor of Theatre Arts</li>
</ul>
<p>Renowned acting schools in India include:</p>
<ul>
  <li>National School of Drama (NSD), Delhi</li>
  <li>Film and Television Institute of India (FTII), Pune</li>
  <li>Whistling Woods International, Mumbai</li>
  <li>Barry John Acting Studio, Mumbai</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>Participate in local theater, short films, or independent projects to gain on-camera experience. Working on stage performances and auditions will enhance your acting skills and build your confidence.</p>

<h2>Step 6: Build a Portfolio</h2>
<p>Create a professional portfolio with headshots, acting reels, and previous project details. A strong portfolio will help you secure auditions and roles in films, television, or advertisements.</p>

<h2>Step 7: Network in the Industry</h2>
<p>Connect with casting directors, filmmakers, and other professionals through networking events, social media, and workshops. Building relationships is crucial in the entertainment industry.</p>

<h2>Step 8: Attend Auditions</h2>
<p>Start attending auditions for roles in films, television shows, web series, or commercials. Persistence and continuous improvement are key to landing roles.</p>

<h2>Skills Required for an Actor</h2>
<ul>
  <li>Expressive communication</li>
  <li>Adaptability to different roles</li>
  <li>Confidence and stage presence</li>
  <li>Memorization and interpretation skills</li>
  <li>Teamwork and collaboration</li>
</ul>

<h2>Salary of an Actor</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level actors may earn between ₹1 lakh to ₹5 lakh per project, depending on the role and platform.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Established actors can earn ₹10 lakh to ₹50 lakh or more per project, especially in films or web series.</p>

<h2>Time to Become an Actor</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Experience and Build Portfolio: 2029-2031</li>
  <li>Begin Professional Acting Career: 2031</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The entertainment industry is expanding rapidly with the rise of OTT platforms, regional cinema, and digital content creation. Opportunities for aspiring actors are abundant, but the competition is fierce.</p>

<h1>Summary</h1>
<p><strong>Time to Become an Actor:</strong> It will take approximately 7-8 years after 10th grade to establish yourself as a professional actor.</p>
<p><strong>Job Market Outlook:</strong> The demand for actors is growing in diverse platforms, including web series, films, and advertisements.</p>
<p><strong>Salary:</strong> Entry-level salaries range from ₹1 lakh to ₹5 lakh per project, with significant growth potential based on performance and popularity.</p>
`;}
    else if (grade === "10th" && career === "fashion-designer") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Fashion Designer After 10th Grade</h1>
<p>Fashion designing is a creative and dynamic career choice that involves designing clothing, accessories, and footwear. Here’s a detailed guide to becoming a fashion designer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>While in school, focus on subjects like Art and Design, as they will help develop your creative skills. Participate in extracurricular activities such as drawing, sketching, or crafting to build a strong foundation for fashion design.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Select a stream like Arts or Commerce, as these offer flexibility for pursuing creative fields. Subjects like Fine Arts and Business Studies can be particularly helpful for future designers.</p>

<h2>Step 3: Enroll in Fashion Designing Courses After 12th</h2>
<p>After completing 12th grade, pursue a formal education in fashion design. Popular courses include:</p>
<ul>
  <li>Bachelor of Fashion Design</li>
  <li>Bachelor of Design (B.Des) in Fashion</li>
  <li>Diploma in Fashion Designing</li>
  <li>Certificate Courses in Fashion Illustration, Draping, or Pattern Making</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>To get admission into top fashion institutes, you may need to clear entrance exams such as:</p>
<ul>
  <li>NIFT Entrance Exam (National Institute of Fashion Technology)</li>
  <li>UCEED (Undergraduate Common Entrance Examination for Design)</li>
  <li>CEED (Common Entrance Examination for Design)</li>
  <li>Pearl Academy Entrance Exam</li>
</ul>

<h2>Step 5: Develop Practical Skills</h2>
<p>While studying, focus on building skills such as:</p>
<ul>
  <li>Sketching and designing</li>
  <li>Fabric knowledge</li>
  <li>Color theory</li>
  <li>Software proficiency (e.g., Adobe Illustrator, Photoshop)</li>
  <li>Pattern making and garment construction</li>
</ul>

<h2>Step 6: Gain Work Experience</h2>
<p>Participate in internships or part-time jobs with fashion houses, garment manufacturers, or designers to gain industry exposure and practical experience.</p>

<h2>Step 7: Build a Portfolio</h2>
<p>Create a professional portfolio showcasing your designs, sketches, and projects. A strong portfolio is essential for applying to jobs or starting your own brand.</p>

<h2>Step 8: Enter the Fashion Industry</h2>
<p>After completing your education, start your career as a:</p>
<ul>
  <li>Fashion Designer</li>
  <li>Textile Designer</li>
  <li>Stylist</li>
  <li>Fashion Consultant</li>
  <li>Entrepreneur (Start your own label)</li>
</ul>

<h2>Skills Required for a Fashion Designer</h2>
<ul>
  <li>Creativity and artistic skills</li>
  <li>Attention to detail</li>
  <li>Strong visualization</li>
  <li>Understanding of trends and markets</li>
  <li>Technical skills in garment making</li>
</ul>

<h2>Salary of a Fashion Designer</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level designers can earn ₹2 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Experienced designers can earn ₹8 lakh to ₹20 lakh per annum, or more if associated with high-end brands.</p>

<h2>Time to Become a Fashion Designer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Work Experience and Build Portfolio: 2029-2031</li>
  <li>Start Professional Career: 2031</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for fashion designers is growing with the expansion of the fashion and apparel industry. Opportunities exist in retail, e-commerce, luxury brands, and independent design ventures.</p>

<h1>Summary</h1>
<p><strong>Time to Become a Fashion Designer:</strong> It takes approximately 7-8 years after 10th grade to establish yourself as a professional fashion designer.</p>
<p><strong>Job Market Outlook:</strong> The fashion industry offers diverse opportunities, including roles in designing, consulting, and entrepreneurship.</p>
<p><strong>Salary:</strong> Entry-level designers earn ₹2 lakh to ₹6 lakh per annum, with significant growth potential based on experience and creativity.</p>
`;}
    else if (grade === "10th" && career === "forensic-scientist") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Forensic Scientist After 10th Grade</h1>
<p>A forensic scientist is a professional who applies scientific methods to analyze evidence for solving crimes. Here’s a detailed guide to becoming a forensic scientist after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>While in school, focus on subjects like Science and Mathematics to build a strong foundation for future studies in forensic science.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Select the Science stream with Physics, Chemistry, and Biology/Mathematics as core subjects. This combination is essential for pursuing higher studies in forensic science.</p>

<h2>Step 3: Enroll in Forensic Science Courses After 12th</h2>
<p>After completing 12th grade, pursue a formal education in forensic science. Popular courses include:</p>
<ul>
  <li>B.Sc. in Forensic Science</li>
  <li>B.Sc. in Biology or Chemistry (with a focus on forensic applications)</li>
  <li>B.Sc. in Criminalistics</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>To secure admission in top forensic science colleges, prepare for entrance exams like:</p>
<ul>
  <li>NEET (for Biology-focused programs)</li>
  <li>CUET (Common University Entrance Test)</li>
  <li>State-level entrance exams for science courses</li>
</ul>

<h2>Step 5: Develop Practical Skills</h2>
<p>While studying, focus on building skills such as:</p>
<ul>
  <li>Knowledge of analytical techniques</li>
  <li>Attention to detail</li>
  <li>Understanding of laboratory equipment</li>
  <li>Report writing and documentation</li>
  <li>Critical thinking and problem-solving</li>
</ul>

<h2>Step 6: Gain Work Experience</h2>
<p>Participate in internships or work as an assistant in forensic laboratories or law enforcement agencies to gain hands-on experience.</p>

<h2>Step 7: Pursue Higher Education (Optional)</h2>
<p>For advanced roles, consider pursuing postgraduate courses such as:</p>
<ul>
  <li>M.Sc. in Forensic Science</li>
  <li>M.Sc. in Criminal Justice</li>
  <li>Specializations in Toxicology, DNA Analysis, or Digital Forensics</li>
</ul>

<h2>Step 8: Enter the Forensic Science Field</h2>
<p>After completing your education, you can start your career as a:</p>
<ul>
  <li>Forensic Scientist</li>
  <li>Crime Scene Investigator</li>
  <li>Laboratory Analyst</li>
  <li>Forensic Toxicologist</li>
  <li>Digital Forensics Specialist</li>
</ul>

<h2>Skills Required for a Forensic Scientist</h2>
<ul>
  <li>Strong analytical and scientific skills</li>
  <li>Attention to detail</li>
  <li>Ability to work under pressure</li>
  <li>Excellent communication and reporting skills</li>
  <li>Understanding of legal procedures and ethics</li>
</ul>

<h2>Salary of a Forensic Scientist</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level forensic scientists can earn ₹3 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, forensic scientists can earn ₹8 lakh to ₹15 lakh per annum.</p>

<h2>Time to Become a Forensic Scientist</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Work Experience or Pursue Postgraduation: 2029-2032</li>
  <li>Start Professional Career: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for forensic scientists is growing with advancements in crime detection technologies. Opportunities exist in law enforcement agencies, private forensic labs, and research institutions.</p>

<h1>Summary</h1>
<p><strong>Forensic Scientist:</strong> A professional who applies scientific methods to solve crimes and analyze evidence.</p>
<p><strong>Time to Become a Forensic Scientist:</strong> It takes approximately 8-10 years after 10th grade to establish yourself in this field.</p>
<p><strong>Job Market Outlook:</strong> With increasing crime rates and the importance of scientific analysis, the demand for forensic scientists is on the rise.</p>
<p><strong>Salary:</strong> Entry-level professionals earn ₹3 lakh to ₹6 lakh per annum, with significant growth potential based on expertise and specialization.</p>
`;}
    else if (grade === "10th" && career === "geologist") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Geologist After 10th Grade</h1>
<p>A geologist is a scientist who studies the Earth, its materials, and the processes that shape it. Here’s a detailed guide to becoming a geologist after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>While in school, focus on subjects like Science and Geography to build a strong foundation for future studies in geology.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Select the Science stream with Physics, Chemistry, and Mathematics/Geography as core subjects. This combination is essential for pursuing higher studies in geology.</p>

<h2>Step 3: Enroll in Geology Courses After 12th</h2>
<p>After completing 12th grade, pursue a formal education in geology. Popular courses include:</p>
<ul>
  <li>B.Sc. in Geology</li>
  <li>B.Sc. in Earth Science</li>
  <li>B.Sc. in Applied Geology</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>To secure admission in top geology colleges, prepare for entrance exams like:</p>
<ul>
  <li>CUET (Common University Entrance Test)</li>
  <li>JEE (for geology-related engineering courses)</li>
  <li>State-level entrance exams for science courses</li>
</ul>

<h2>Step 5: Develop Practical Skills</h2>
<p>While studying, focus on building skills such as:</p>
<ul>
  <li>Knowledge of minerals and rocks</li>
  <li>Mapping and fieldwork expertise</li>
  <li>Understanding of geological processes</li>
  <li>Data analysis and interpretation</li>
  <li>Report writing and presentation</li>
</ul>

<h2>Step 6: Gain Work Experience</h2>
<p>Participate in internships or work as an assistant in geological surveys, mining companies, or research organizations to gain hands-on experience.</p>

<h2>Step 7: Pursue Higher Education (Optional)</h2>
<p>For advanced roles, consider pursuing postgraduate courses such as:</p>
<ul>
  <li>M.Sc. in Geology</li>
  <li>M.Sc. in Petroleum Geology</li>
  <li>M.Sc. in Environmental Geology</li>
</ul>

<h2>Step 8: Enter the Geology Field</h2>
<p>After completing your education, you can start your career as a:</p>
<ul>
  <li>Geologist</li>
  <li>Hydrogeologist</li>
  <li>Mining Geologist</li>
  <li>Petroleum Geologist</li>
  <li>Environmental Consultant</li>
</ul>

<h2>Skills Required for a Geologist</h2>
<ul>
  <li>Strong analytical and observational skills</li>
  <li>Interest in Earth sciences and natural phenomena</li>
  <li>Ability to work in outdoor environments</li>
  <li>Proficiency in data analysis and GIS tools</li>
  <li>Problem-solving and critical thinking abilities</li>
</ul>

<h2>Salary of a Geologist</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level geologists can earn ₹4 lakh to ₹7 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, geologists can earn ₹10 lakh to ₹20 lakh per annum.</p>

<h2>Time to Become a Geologist</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Work Experience or Pursue Postgraduation: 2029-2032</li>
  <li>Start Professional Career: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for geologists is growing due to the need for natural resource exploration, environmental conservation, and geological hazard assessment. Opportunities exist in government agencies, private firms, and research institutions.</p>

<h1>Summary</h1>
<p><strong>Geologist:</strong> A scientist who studies Earth's materials, structure, and processes to understand its history and resources.</p>
<p><strong>Time to Become a Geologist:</strong> It takes approximately 8-10 years after 10th grade to establish yourself in this field.</p>
<p><strong>Job Market Outlook:</strong> The demand for geologists is high due to the increasing need for sustainable resource management and environmental protection.</p>
<p><strong>Salary:</strong> Entry-level professionals earn ₹4 lakh to ₹7 lakh per annum, with significant growth potential based on expertise and specialization.</p>
`;}
  else if (grade === "10th" && career === "hotel-manager") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Hotel Manager After 10th Grade</h1>
<p>A hotel manager oversees the operations of a hotel, ensuring smooth functioning and excellent customer service. Here’s a detailed guide to becoming a hotel manager after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>While in school, focus on subjects like English and Business Studies to build a foundation for future studies in hotel management.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Commerce stream in 11th grade to develop an understanding of business and management principles. However, students from any stream can pursue hotel management courses later.</p>

<h2>Step 3: Enroll in Hotel Management Courses After 12th</h2>
<p>After completing 12th grade, pursue a formal education in hotel management. Popular courses include:</p>
<ul>
  <li>B.Sc. in Hotel Management</li>
  <li>Diploma in Hospitality Management</li>
  <li>Bachelor of Hotel Management (BHM)</li>
  <li>BA in Hotel Management</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>To secure admission in top hotel management colleges, prepare for entrance exams like:</p>
<ul>
  <li>NCHM JEE (National Council for Hotel Management Joint Entrance Examination)</li>
  <li>IHM Entrance Exams</li>
  <li>State-level hotel management entrance exams</li>
</ul>

<h2>Step 5: Develop Practical Skills</h2>
<p>While studying, focus on building skills such as:</p>
<ul>
  <li>Communication and interpersonal skills</li>
  <li>Customer service and problem-solving</li>
  <li>Leadership and team management</li>
  <li>Budgeting and financial management</li>
  <li>Understanding of hotel operations and standards</li>
</ul>

<h2>Step 6: Gain Work Experience</h2>
<p>Participate in internships or part-time jobs in hotels, resorts, or hospitality businesses to gain hands-on experience and industry exposure.</p>

<h2>Step 7: Start Your Career</h2>
<p>After completing your education, begin your career in roles such as:</p>
<ul>
  <li>Front Office Executive</li>
  <li>Food and Beverage Manager</li>
  <li>Event Coordinator</li>
  <li>Assistant Hotel Manager</li>
</ul>
<p>With experience, you can advance to the role of a Hotel Manager.</p>

<h2>Skills Required for a Hotel Manager</h2>
<ul>
  <li>Excellent communication and organizational skills</li>
  <li>Ability to handle customer complaints and queries effectively</li>
  <li>Strong leadership and decision-making abilities</li>
  <li>Knowledge of hospitality standards and practices</li>
  <li>Flexibility and adaptability to work in a dynamic environment</li>
</ul>

<h2>Salary of a Hotel Manager</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level hotel managers can earn ₹3 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, hotel managers can earn ₹8 lakh to ₹20 lakh per annum.</p>

<h2>Time to Become a Hotel Manager</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Work Experience: 2029-2032</li>
  <li>Become a Hotel Manager: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The hospitality industry is growing rapidly, offering ample opportunities for skilled hotel managers in hotels, resorts, cruise ships, and event management companies.</p>

<h1>Summary</h1>
<p><strong>Hotel Manager:</strong> A professional responsible for managing hotel operations and ensuring guest satisfaction.</p>
<p><strong>Time to Become a Hotel Manager:</strong> Approximately 8-10 years after 10th grade.</p>
<p><strong>Job Market Outlook:</strong> High demand in the expanding hospitality and tourism sectors.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹3 lakh to ₹6 lakh per annum, with significant growth potential.</p>
`;}

   else if (grade === "10th" && career === "human-resources-manager") {
                 guidanceContainer.innerHTML = `<h1>Path to Becoming a Human Resources Manager After 10th Grade</h1>
<p>A Human Resources (HR) Manager plays a key role in managing a company's workforce by handling recruitment, employee relations, and organizational development. Here’s a detailed guide to becoming an HR Manager after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like English and Social Studies to build strong communication and analytical skills, which are crucial for a career in human resources.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Commerce or Arts stream in 11th grade to develop a foundation in business and human behavior. Subjects like Psychology, Economics, and Business Studies are particularly beneficial.</p>

<h2>Step 3: Pursue a Bachelor’s Degree</h2>
<p>After completing 12th grade, enroll in a relevant undergraduate program such as:</p>
<ul>
  <li>BBA (Bachelor of Business Administration) with a specialization in HR</li>
  <li>B.A. in Psychology, Sociology, or Organizational Studies</li>
  <li>B.Com (Bachelor of Commerce) with an HR focus</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>Some universities require entrance exams for admission into HR-related programs. Common exams include:</p>
<ul>
  <li>DUET (Delhi University Entrance Test)</li>
  <li>IPMAT (Integrated Program in Management Aptitude Test)</li>
  <li>State-level management entrance exams</li>
</ul>

<h2>Step 5: Pursue an HR Certification or Master’s Degree</h2>
<p>For career advancement, pursue a postgraduate degree or professional certifications, such as:</p>
<ul>
  <li>MBA in Human Resource Management</li>
  <li>PG Diploma in Human Resources</li>
  <li>Certifications like SHRM (Society for Human Resource Management) or PHR (Professional in Human Resources)</li>
</ul>

<h2>Step 6: Gain Work Experience</h2>
<p>Start with entry-level HR roles like HR Assistant or Recruiter to gain hands-on experience in recruitment, payroll, and employee engagement.</p>

<h2>Step 7: Advance to HR Manager</h2>
<p>With sufficient experience and skills, progress to the role of an HR Manager, where you’ll handle strategic HR functions like workforce planning and policy development.</p>

<h2>Skills Required for an HR Manager</h2>
<ul>
  <li>Excellent communication and interpersonal skills</li>
  <li>Strong organizational and leadership abilities</li>
  <li>Knowledge of labor laws and HR policies</li>
  <li>Conflict resolution and problem-solving skills</li>
  <li>Ability to manage recruitment and employee relations</li>
</ul>

<h2>Salary of an HR Manager</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level HR Managers can earn ₹4 lakh to ₹8 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, HR Managers can earn ₹10 lakh to ₹20 lakh per annum.</p>

<h2>Time to Become an HR Manager</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Work Experience: 2029-2033</li>
  <li>Become an HR Manager: 2033</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for HR professionals is steady across industries, making this a rewarding career choice with opportunities in corporate offices, consulting firms, and startups.</p>

<h1>Summary</h1>
<p><strong>Human Resources Manager:</strong> A professional responsible for managing a company's workforce and HR strategies.</p>
<p><strong>Time to Become an HR Manager:</strong> Approximately 8-10 years after 10th grade.</p>
<p><strong>Job Market Outlook:</strong> Consistently strong demand across all sectors.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹4 lakh to ₹8 lakh per annum, with significant growth potential.</p>
`;}
        else if (grade === "10th" && career === "journalist") {
             guidanceContainer.innerHTML = `<h1>Path to Becoming a Journalist After 10th Grade</h1>
<p>A Journalist is responsible for gathering, analyzing, and reporting news and stories to inform the public through various media channels like newspapers, TV, radio, and online platforms. Here’s a step-by-step guide to becoming a Journalist after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like English and Social Studies to build strong communication and analytical skills, which are crucial for a career in journalism.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Arts or Commerce stream in 11th grade. Subjects like English, Political Science, and Economics can help develop a foundation for journalism.</p>

<h2>Step 3: Pursue a Bachelor’s Degree</h2>
<p>After completing 12th grade, enroll in a relevant undergraduate program such as:</p>
<ul>
  <li>Bachelor of Arts (BA) in Journalism and Mass Communication</li>
  <li>Bachelor of Mass Media (BMM)</li>
  <li>BA in English Literature with a focus on communication</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>Some universities require entrance exams for journalism programs. Common exams include:</p>
<ul>
  <li>IIMC Entrance Exam (Indian Institute of Mass Communication)</li>
  <li>IPU CET (Indraprastha University Common Entrance Test)</li>
  <li>JMI Entrance Exam (Jamia Millia Islamia)</li>
  <li>State-level journalism entrance exams</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>During or after your degree, pursue internships or entry-level roles in media houses, newspapers, or online platforms. Build a portfolio of your work, including articles, reports, or multimedia content.</p>

<h2>Step 6: Pursue a Master’s Degree (Optional)</h2>
<p>A master’s degree can help in specialization and career advancement. Popular options include:</p>
<ul>
  <li>Master of Arts (MA) in Journalism</li>
  <li>Postgraduate Diploma in Journalism</li>
</ul>

<h2>Step 7: Specialize in a Field</h2>
<p>Journalism offers various specializations such as:</p>
<ul>
  <li>Print Journalism</li>
  <li>Broadcast Journalism</li>
  <li>Digital Journalism</li>
  <li>Sports, Political, or Investigative Journalism</li>
</ul>

<h2>Skills Required for a Journalist</h2>
<ul>
  <li>Strong communication and writing skills</li>
  <li>Ability to work under deadlines</li>
  <li>Analytical and research abilities</li>
  <li>Knowledge of media ethics and laws</li>
  <li>Adaptability to new technologies and platforms</li>
</ul>

<h2>Salary of a Journalist</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level journalists can earn ₹2.5 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Experienced journalists can earn ₹8 lakh to ₹15 lakh per annum, depending on their specialization and platform.</p>

<h2>Time to Become a Journalist</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2026-2029</li>
  <li>Gain Work Experience: 2029-2031</li>
  <li>Become a Professional Journalist: 2031</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The journalism field is evolving with the growth of digital media, creating new opportunities for content creators, reporters, and multimedia specialists.</p>

<h1>Summary</h1>
<p><strong>Journalist:</strong> A professional who reports and analyzes news to inform the public through various media platforms.</p>
<p><strong>Time to Become a Journalist:</strong> Approximately 7-8 years after 10th grade.</p>
<p><strong>Job Market Outlook:</strong> Growing demand in digital media and traditional outlets.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹2.5 lakh to ₹6 lakh per annum, with significant growth potential.</p>
`;}
    else if (grade === "10th" && career === "lawyer") {
           guidanceContainer.innerHTML = `<h1>Path to Becoming a Lawyer After 10th Grade</h1>
<p>A Lawyer provides legal advice, represents clients in legal matters, and advocates in courts. Here’s a step-by-step guide to becoming a Lawyer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on building a strong academic foundation, especially in English and Social Studies, as these subjects will help in understanding legal concepts and communication.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Arts or Commerce stream. Subjects like Political Science, Economics, and English can be beneficial for aspiring lawyers.</p>

<h2>Step 3: Pursue a Bachelor’s Degree in Law (Integrated Program)</h2>
<p>After completing 12th grade, enroll in a 5-year integrated law program such as:</p>
<ul>
  <li>BA LLB (Bachelor of Arts and Bachelor of Laws)</li>
  <li>BBA LLB (Bachelor of Business Administration and Bachelor of Laws)</li>
  <li>BCom LLB (Bachelor of Commerce and Bachelor of Laws)</li>
</ul>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>Admission to law programs often requires clearing entrance exams. Common exams include:</p>
<ul>
  <li>CLAT (Common Law Admission Test)</li>
  <li>LSAT India (Law School Admission Test)</li>
  <li>SLAT (Symbiosis Law Admission Test)</li>
  <li>State-level law entrance exams</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>During your degree, participate in internships with law firms, legal aid organizations, or under experienced lawyers. This will help you understand real-world legal practice.</p>

<h2>Step 6: Enroll with the Bar Council</h2>
<p>After completing your degree, register with the Bar Council of India (BCI) to become a certified lawyer. This requires passing the All India Bar Examination (AIBE).</p>

<h2>Step 7: Specialize in a Field (Optional)</h2>
<p>Law offers various specializations such as:</p>
<ul>
  <li>Corporate Law</li>
  <li>Criminal Law</li>
  <li>Family Law</li>
  <li>Intellectual Property Law</li>
  <li>Environmental Law</li>
</ul>

<h2>Skills Required for a Lawyer</h2>
<ul>
  <li>Strong communication and writing skills</li>
  <li>Analytical and logical reasoning</li>
  <li>Knowledge of legal principles and laws</li>
  <li>Research and problem-solving abilities</li>
  <li>Negotiation and advocacy skills</li>
</ul>

<h2>Salary of a Lawyer</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level lawyers can earn ₹3 lakh to ₹6 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Experienced lawyers can earn ₹8 lakh to ₹20 lakh per annum, depending on their specialization and firm.</p>

<h2>Time to Become a Lawyer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete 5-Year Integrated Law Degree: 2026-2031</li>
  <li>Clear AIBE and Gain Experience: 2031-2033</li>
  <li>Become a Practicing Lawyer: 2033</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The legal field is consistently growing, with increasing demand for legal professionals in corporate firms, litigation, and specialized areas like cybersecurity and intellectual property law.</p>

<h1>Summary</h1>
<p><strong>Lawyer:</strong> A professional who provides legal advice, represents clients, and advocates in courts.</p>
<p><strong>Time to Become a Lawyer:</strong> Approximately 9 years after 10th grade.</p>
<p><strong>Job Market Outlook:</strong> Strong demand across diverse legal specializations.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹3 lakh to ₹6 lakh per annum, with significant growth potential based on experience and expertise.</p>
`;}
    else if (grade === "10th" && career === "nurse") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Nurse After 10th Grade</h1>
<p>A Nurse is an essential part of the healthcare system, providing patient care, administering medications, and assisting in medical procedures. Here’s a step-by-step guide to becoming a Nurse after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Science (especially Biology and Chemistry) to build the foundation for a nursing career.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Science stream with a focus on Biology and Chemistry, which are crucial for nursing education.</p>

<h2>Step 3: Pursue a Nursing Diploma or Degree</h2>
<p>After completing 12th grade, you can choose between pursuing a Nursing Diploma (3 years) or a Bachelor's degree in Nursing (B.Sc. Nursing, 4 years). Both qualifications lead to a career in nursing, but the B.Sc. Nursing offers better career prospects and opportunities for higher studies.</p>

<h2>Step 4: Prepare for Entrance Exams</h2>
<p>Admission to nursing programs may require passing entrance exams. Common exams include:</p>
<ul>
  <li>AIIMS Nursing Exam</li>
  <li>NEET (National Eligibility cum Entrance Test) for B.Sc. Nursing in some institutes</li>
  <li>State-level nursing entrance exams</li>
</ul>

<h2>Step 5: Gain Practical Experience</h2>
<p>During your nursing course, participate in internships and clinical training at hospitals, clinics, or healthcare centers. This hands-on experience is essential for building practical skills and knowledge.</p>

<h2>Step 6: Register with the Nursing Council</h2>
<p>After completing your nursing diploma or degree, you must register with the respective State Nursing Council or the Indian Nursing Council (INC) to become a licensed Nurse.</p>

<h2>Step 7: Specialize (Optional)</h2>
<p>You can choose to specialize in various nursing fields, such as:</p>
<ul>
  <li>Critical Care Nursing</li>
  <li>Pediatric Nursing</li>
  <li>Obstetric and Gynecological Nursing</li>
  <li>Geriatric Nursing</li>
  <li>Oncology Nursing</li>
  <li>Neonatal Nursing</li>
</ul>

<h2>Skills Required for a Nurse</h2>
<ul>
  <li>Empathy and patience</li>
  <li>Strong communication and interpersonal skills</li>
  <li>Attention to detail and ability to follow medical instructions</li>
  <li>Problem-solving and critical thinking abilities</li>
  <li>Physical stamina to handle long shifts and demanding tasks</li>
</ul>

<h2>Salary of a Nurse</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level nurses can earn ₹2 lakh to ₹4 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Experienced nurses can earn ₹5 lakh to ₹8 lakh per annum, depending on their specialization and sector (hospitals, clinics, nursing homes).</p>

<h2>Time to Become a Nurse</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue 3-Year Diploma or 4-Year B.Sc. Nursing: 2026-2030</li>
  <li>Gain License and Experience: 2030-2032</li>
  <li>Become a Licensed Nurse: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for nurses is steadily increasing due to the growth of healthcare facilities and the aging population. Nurses are needed in hospitals, clinics, nursing homes, and public health sectors, both in India and abroad.</p>

<h1>Summary</h1>
<p><strong>Nurse:</strong> A healthcare professional who provides patient care, administers medications, and supports medical teams.</p>
<p><strong>Time to Become a Nurse:</strong> Approximately 6 to 7 years after 10th grade (depending on diploma or degree route).</p>
<p><strong>Job Market Outlook:</strong> Strong demand for nurses in healthcare sectors worldwide.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹2 lakh to ₹4 lakh per annum, with potential growth to ₹5 lakh to ₹8 lakh per annum.</p>
`;}
            else if (grade === "10th" && career === "pharmacist") {
                guidanceContainer.innerHTML = `<h1>Path to Becoming a Pharmacist After 10th Grade</h1>
<p>A Pharmacist plays a crucial role in healthcare by dispensing medications, providing health advice, and ensuring the safe use of pharmaceutical products. Here’s a step-by-step guide to becoming a Pharmacist after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Science (particularly Chemistry and Biology) as they form the foundation for pharmaceutical studies.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Science stream with a focus on Biology and Chemistry, which are essential for pursuing a career in pharmacy.</p>

<h2>Step 3: Pursue a Diploma in Pharmacy (D.Pharm)</h2>
<p>After completing 12th grade, you can pursue a 2-year Diploma in Pharmacy (D.Pharm) from a recognized institution. This is the minimum qualification required to practice as a Pharmacist.</p>

<h2>Step 4: Pursue a Bachelor’s Degree in Pharmacy (B.Pharm)</h2>
<p>Alternatively, you can pursue a 4-year Bachelor’s degree in Pharmacy (B.Pharm) for better career prospects and higher qualifications. It provides a deeper understanding of pharmaceuticals, drug management, and healthcare systems.</p>

<h2>Step 5: Prepare for Entrance Exams</h2>
<p>Admission to pharmacy programs may require passing entrance exams. Common exams include:</p>
<ul>
  <li>GPAT (Graduate Pharmacy Aptitude Test)</li>
  <li>State-level entrance exams</li>
  <li>Institute-level exams for specific pharmacy colleges</li>
</ul>

<h2>Step 6: Gain Practical Experience</h2>
<p>During your degree, participate in internships at pharmacies, hospitals, or pharmaceutical companies. Hands-on experience is essential for understanding how to apply theoretical knowledge in real-world situations.</p>

<h2>Step 7: Register with the Pharmacy Council</h2>
<p>After completing your degree or diploma, you must register with the Pharmacy Council of India (PCI) or the respective State Pharmacy Council to practice as a licensed Pharmacist.</p>

<h2>Step 8: Specialize (Optional)</h2>
<p>You can specialize in various fields, such as:</p>
<ul>
  <li>Clinical Pharmacy</li>
  <li>Community Pharmacy</li>
  <li>Industrial Pharmacy</li>
  <li>Pharmacovigilance</li>
  <li>Pharmaceutical Marketing</li>
</ul>

<h2>Skills Required for a Pharmacist</h2>
<ul>
  <li>Knowledge of medications and their effects</li>
  <li>Attention to detail and accuracy</li>
  <li>Good communication and customer service skills</li>
  <li>Problem-solving abilities</li>
  <li>Understanding of pharmaceutical laws and regulations</li>
</ul>

<h2>Salary of a Pharmacist</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level pharmacists can earn ₹2 lakh to ₹4 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Experienced pharmacists can earn ₹5 lakh to ₹10 lakh per annum, depending on their role and sector (hospital, retail, pharmaceutical industry).</p>

<h2>Time to Become a Pharmacist</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete 2-Year D.Pharm or 4-Year B.Pharm: 2026-2030</li>
  <li>Gain License and Experience: 2030-2032</li>
  <li>Become a Practicing Pharmacist: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The pharmacy sector is growing with increasing demand for pharmacists in hospitals, clinics, retail pharmacies, and pharmaceutical industries, especially in drug development and clinical trials.</p>

<h1>Summary</h1>
<p><strong>Pharmacist:</strong> A healthcare professional responsible for dispensing medications, offering medical advice, and ensuring safe drug usage.</p>
<p><strong>Time to Become a Pharmacist:</strong> Approximately 7 to 8 years after 10th grade (depending on D.Pharm or B.Pharm route).</p>
<p><strong>Job Market Outlook:</strong> Strong demand across healthcare and pharmaceutical sectors.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹2 lakh to ₹4 lakh per annum, with potential growth to ₹5 lakh to ₹10 lakh per annum.</p>
`;}
        else if (grade === "10th" && career === "pilot") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Pilot After 10th Grade</h1>
<p>A pilot is a highly skilled professional responsible for flying aircraft and ensuring the safety of passengers and cargo. Here’s a step-by-step guide to becoming a Pilot after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Physics, Mathematics, and English, as these will form the foundation for your aviation career.</p>

<h2>Step 2: Choose a Relevant Stream in 11th Grade</h2>
<p>Opt for the Science stream with a focus on Physics and Mathematics, which are essential for understanding aerodynamics and other aviation concepts.</p>

<h2>Step 3: Complete 12th Grade with Physics and Mathematics</h2>
<p>Ensure that you complete your 12th grade with Physics, Mathematics, and English. These subjects are crucial for your future pilot training and the entrance exams required for flying schools.</p>

<h2>Step 4: Pursue a Commercial Pilot License (CPL) Program</h2>
<p>After completing 12th grade, you need to join a recognized flying school to pursue a Commercial Pilot License (CPL) program. This program typically lasts 18 months to 2 years and includes both theoretical and practical training.</p>

<h2>Step 5: Clear Medical Fitness Test</h2>
<p>Before enrolling in a flying school, you must undergo a medical examination by a certified doctor. You need to meet specific health requirements, including good vision and hearing.</p>

<h2>Step 6: Pass Entrance Exams</h2>
<p>Admission to flying schools may require passing entrance exams. Common exams include:</p>
<ul>
  <li>AIR India Cadet Pilot Program</li>
  <li>Indira Gandhi Institute of Aeronautics Entrance Exam</li>
  <li>Private Flying Schools’ Entrance Exams</li>
</ul>

<h2>Step 7: Flight Training</h2>
<p>Flight training is the core part of becoming a pilot. You will learn to operate aircraft, handle emergency situations, and become familiar with aviation protocols. This phase typically includes a minimum of 200-250 hours of flying experience.</p>

<h2>Step 8: Obtain a Commercial Pilot License (CPL)</h2>
<p>After completing flight training and meeting all the requirements, you can obtain your Commercial Pilot License (CPL), which qualifies you to fly commercial aircraft.</p>

<h2>Step 9: Gain Experience</h2>
<p>Most pilots start their careers as First Officers or Co-Pilots. You will need to accumulate flight hours and experience before becoming a Captain.</p>

<h2>Step 10: Apply for Jobs in Airlines</h2>
<p>Once you have your CPL and the required flight hours, you can apply for jobs in airlines. Airlines typically require you to pass a selection process that includes interviews, psychological tests, and technical assessments.</p>

<h2>Skills Required for a Pilot</h2>
<ul>
  <li>Strong understanding of aerodynamics and flight principles</li>
  <li>Excellent communication and coordination skills</li>
  <li>Quick decision-making abilities in emergency situations</li>
  <li>Attention to detail and accuracy in following protocols</li>
  <li>Physical fitness and mental stability</li>
</ul>

<h2>Salary of a Pilot</h2>
<p><strong>Starting Salary (2024):</strong> Entry-level pilots can earn ₹5 lakh to ₹10 lakh per annum.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Experienced pilots can earn ₹15 lakh to ₹25 lakh per annum, depending on the airline and flight hours.</p>

<h2>Time to Become a Pilot</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Enroll in a Flying School for CPL Program: 2026-2028</li>
  <li>Complete Flight Training and Obtain CPL: 2028</li>
  <li>Gain Experience and Apply for Airline Jobs: 2029</li>
  <li>Become a Captain: 2032-2035</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for pilots is growing globally due to the expansion of the aviation industry and increasing travel. However, competition for airline jobs can be intense, and gaining experience is crucial for career progression.</p>

<h1>Summary</h1>
<p><strong>Pilot:</strong> A professional responsible for flying aircraft and ensuring the safety of passengers and cargo.</p>
<p><strong>Time to Become a Pilot:</strong> Approximately 6 to 7 years after 10th grade (depending on flight training and experience).</p>
<p><strong>Job Market Outlook:</strong> Strong demand for pilots in the aviation industry, with global opportunities.</p>
<p><strong>Salary:</strong> Starting salaries range from ₹5 lakh to ₹10 lakh per annum, with potential growth to ₹15 lakh to ₹25 lakh per annum.</p>
`;}
        else if (grade === "10th" && career === "poet") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Poet After 10th Grade</h1>
<p>A poet is someone who creates literary works using rhythmic and imaginative language to express emotions, ideas, and experiences. Here’s a step-by-step guide to becoming a poet after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects that improve your language and comprehension skills, such as English. A strong command of vocabulary, grammar, and literary devices is essential for a poet.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Humanities stream in 11th grade, with subjects like English Literature and other languages, as these will enhance your ability to understand literary works and develop your writing skills.</p>

<h2>Step 3: Complete 12th Grade with a Focus on Literature</h2>
<p>Continue with English or Literature as your main subject in 12th grade. This will provide you with a deeper understanding of poetry and literature, helping to improve your creative writing abilities.</p>

<h2>Step 4: Pursue a Degree in Literature or Creative Writing</h2>
<p>After completing 12th grade, you can pursue a Bachelor's degree in English Literature, Creative Writing, or any other related field. These courses will help you explore various styles of writing, literary theory, and historical contexts of poetry.</p>

<h2>Step 5: Start Writing Poetry Regularly</h2>
<p>Begin writing poetry on a daily basis. Experiment with different styles, themes, and structures. Writing consistently will help you develop your own unique voice as a poet.</p>

<h2>Step 6: Attend Workshops or Join Writing Communities</h2>
<p>Participate in writing workshops or join online writing communities. These environments allow you to share your work, get feedback, and refine your craft. Constructive criticism will help you improve as a poet.</p>

<h2>Step 7: Publish Your Poetry</h2>
<p>Start submitting your poetry to literary magazines, online platforms, or self-publish a collection of your work. Gaining recognition through publication will help you build a following and advance your career as a poet.</p>

<h2>Step 8: Participate in Poetry Readings and Competitions</h2>
<p>Engage in public readings, poetry slams, or competitions. This will give you experience in presenting your work and help you connect with other poets and poetry enthusiasts.</p>

<h2>Step 9: Continue Expanding Your Literary Knowledge</h2>
<p>Read a variety of poetry from different poets and time periods. Learning from other poets will provide inspiration and insight into different styles and techniques, helping you grow as a writer.</p>

<h2>Skills Required for a Poet</h2>
<ul>
  <li>Strong command of language and grammar</li>
  <li>Imagination and creativity</li>
  <li>Ability to evoke emotions and convey deep meaning</li>
  <li>Patience and perseverance to write regularly</li>
  <li>Willingness to receive feedback and revise work</li>
</ul>

<h2>Salary of a Poet</h2>
<p><strong>Starting Salary (2024):</strong> Most poets earn money through book sales, publishing contracts, or teaching writing. The starting income can vary significantly, ranging from ₹2 lakh to ₹5 lakh annually.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Established poets may earn between ₹10 lakh to ₹20 lakh annually from publications, performances, and teaching.</p>

<h2>Time to Become a Poet</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Degree in Literature/Creative Writing: 2026-2029</li>
  <li>Start Writing and Publishing Poetry: 2029</li>
  <li>Establish Yourself as a Poet: 2032+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The job market for poets is often unpredictable. Many poets supplement their income through teaching, writing workshops, or freelance work. However, with dedication and a unique voice, poets can achieve recognition and success.</p>

<h1>Summary</h1>
<p><strong>Poet:</strong> A creative professional who writes poetry to express emotions, thoughts, and ideas.</p>
<p><strong>Time to Become a Poet:</strong> It may take around 5-7 years after completing 10th grade to establish yourself as a poet.</p>
<p><strong>Job Market Outlook:</strong> A competitive field with opportunities through publishing, teaching, and freelance writing.</p>
<p><strong>Salary:</strong> Starting income ranges from ₹2 lakh to ₹5 lakh per annum, with potential growth to ₹10 lakh to ₹20 lakh per annum.</p>
`;}
    else if (grade === "10th" && career === "politician") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Politician After 10th Grade</h1>
<p>A politician is an individual who seeks to hold public office and represent the interests of the people. Here’s a step-by-step guide to becoming a politician after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects that develop communication skills, such as English and social studies. Understanding history, economics, and government will lay the foundation for a political career.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Humanities stream in 11th grade, with subjects like Political Science, History, and Economics. These subjects provide a solid understanding of political systems and societal issues.</p>

<h2>Step 3: Complete 12th Grade with Focus on Politics</h2>
<p>Continue with Political Science, History, or Economics in 12th grade to further develop your knowledge of politics, governance, and the economy. These subjects will help you build a strong academic foundation for your future career.</p>

<h2>Step 4: Pursue a Bachelor's Degree in Political Science or Law</h2>
<p>After completing 12th grade, you can pursue a Bachelor's degree in Political Science, Public Administration, or Law. These degrees will equip you with the necessary knowledge of political systems, legal frameworks, and public policy.</p>

<h2>Step 5: Engage in Public Service or Join a Political Party</h2>
<p>Get involved in student government, social causes, or community service projects to build leadership experience. Joining a political party early on can also help you gain exposure and experience in the political field.</p>

<h2>Step 6: Build a Strong Network</h2>
<p>Networking is crucial in politics. Build relationships with mentors, activists, community leaders, and party members. Attend political events and discussions to expand your connections.</p>

<h2>Step 7: Run for Local Office or Participate in Campaigns</h2>
<p>Start by running for local office or supporting political campaigns to gain experience in the political process. This will help you understand how elections work and the challenges faced by politicians.</p>

<h2>Step 8: Continue Education and Professional Development</h2>
<p>Continue to educate yourself about political issues, public policy, and leadership. Participate in seminars, workshops, and public speaking events to improve your skills and visibility as a future politician.</p>

<h2>Step 9: Become a Public Figure</h2>
<p>Work towards building your public profile by engaging in media, writing articles, or participating in debates. Public figures in politics are often known for their ideas, actions, and ability to communicate with the masses.</p>

<h2>Skills Required for a Politician</h2>
<ul>
  <li>Strong leadership and communication skills</li>
  <li>Ability to negotiate and persuade</li>
  <li>Knowledge of governance, law, and economics</li>
  <li>Problem-solving and decision-making abilities</li>
  <li>Public speaking and media interaction skills</li>
</ul>

<h2>Salary of a Politician</h2>
<p><strong>Starting Salary (2024):</strong> The salary of a politician can vary based on the position and country. A Member of Parliament (MP) in India earns around ₹12-15 lakh annually, along with other allowances and benefits.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> Senior political leaders and ministers can earn significantly more, ranging from ₹20 lakh to ₹40 lakh annually, depending on their position and the country they serve.</p>

<h2>Time to Become a Politician</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Degree in Political Science/Law: 2026-2029</li>
  <li>Begin Political Involvement: 2029</li>
  <li>Run for Office: 2032+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The job market for politicians is competitive, and success often depends on networking, public support, and leadership skills. While there are many opportunities, building a career in politics takes time, dedication, and involvement in the community.</p>

<h1>Summary</h1>
<p><strong>Politician:</strong> A professional who seeks public office to represent and serve the people through policy-making, legislation, and governance.</p>
<p><strong>Time to Become a Politician:</strong> It may take around 8-10 years after completing 10th grade to gain the necessary experience and run for office.</p>
<p><strong>Job Market Outlook:</strong> A competitive field where success depends on public support, experience, and networking.</p>
<p><strong>Salary:</strong> Starting income ranges from ₹12 lakh to ₹15 lakh per annum, with potential growth to ₹20 lakh to ₹40 lakh annually.</p>
`;}
    else if (grade === "10th" && career === "public-servant") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Public Servant After 10th Grade</h1>
<p>A public servant works for the government and serves the people in various administrative, legal, or service-related roles. Here’s how you can become a public servant after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects that enhance your understanding of society, such as Social Science, Geography, and Economics. These will lay the foundation for a career in the public sector.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Humanities stream in 11th grade, particularly subjects like Political Science, History, and Economics, as these are closely related to public administration and governance.</p>

<h2>Step 3: Complete 12th Grade with Focus on Public Service</h2>
<p>Continue with Political Science, Economics, or History in 12th grade to deepen your understanding of governance, legal systems, and social issues.</p>

<h2>Step 4: Pursue a Bachelor's Degree in Public Administration, Political Science, or Law</h2>
<p>After completing 12th grade, pursue a Bachelor's degree in Public Administration, Political Science, Law, or a similar field. This will provide the academic foundation necessary for government roles.</p>

<h2>Step 5: Prepare for Competitive Exams</h2>
<p>To become a public servant in India, competitive exams like the UPSC (Union Public Service Commission) for roles such as IAS, IFS, and IPS, or state-level exams for civil services, are essential. Start preparing during your graduation by joining coaching centers, taking online courses, and studying previous years' papers.</p>

<h2>Step 6: Join a Government Job or Public Service Role</h2>
<p>Once you pass the relevant exams, you can join the government as a civil servant, administrator, or in other roles such as a police officer, tax officer, or public health official.</p>

<h2>Step 7: Gain Experience and Advance in Your Career</h2>
<p>After joining a public service role, gain experience in the field, take additional training or certifications, and seek promotions to higher administrative positions.</p>

<h2>Step 8: Continue Professional Development</h2>
<p>Participate in workshops, seminars, and training programs to stay updated with government policies, administration techniques, and public service practices.</p>

<h2>Skills Required for a Public Servant</h2>
<ul>
  <li>Strong analytical and problem-solving skills</li>
  <li>Leadership and management abilities</li>
  <li>Effective communication and interpersonal skills</li>
  <li>Knowledge of governance, laws, and public administration</li>
  <li>Time management and decision-making skills</li>
</ul>

<h2>Salary of a Public Servant</h2>
<p><strong>Starting Salary (2024):</strong> The salary of a public servant depends on the role and level. For example, an IAS officer starts with a salary of around ₹56,100 per month, with additional allowances and benefits.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> As you gain experience and rise through the ranks, the salary of a senior public servant can reach ₹1,00,000 to ₹2,00,000 per month, along with additional perks.</p>

<h2>Time to Become a Public Servant</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Degree in Public Administration/Political Science/Law: 2026-2029</li>
  <li>Prepare for Competitive Exams: 2029-2030</li>
  <li>Join Public Service Role: 2030+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The job market for public servants is competitive and requires extensive preparation for exams. The demand for professionals in public service remains strong due to the need for efficient governance, but success depends on qualifications, exam performance, and experience.</p>

<h1>Summary</h1>
<p><strong>Public Servant:</strong> A professional working in various government positions to serve the public through administrative, legal, or policy-related roles.</p>
<p><strong>Time to Become a Public Servant:</strong> It can take approximately 7-10 years to join the public service after completing 10th grade, depending on the role and exam preparation time.</p>
<p><strong>Job Market Outlook:</strong> A competitive and rewarding field with steady demand for professionals committed to public service.</p>
<p><strong>Salary:</strong> Starting salary around ₹56,100 per month for an entry-level position, increasing with experience and promotions.</p>
`;}
      else if (grade === "10th" && career === "robotics-engineer") {
          guidanceContainer.innerHTML = `<h1>Path to Becoming a Robotics Engineer After 10th Grade</h1>
<p>A robotics engineer designs, builds, and maintains robots and robotic systems used in manufacturing, medical, and other sectors. Here’s how you can become a robotics engineer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects such as Mathematics, Physics, and Computer Science in 10th grade. These subjects form the foundation for robotics engineering, as robotics involves both mechanical and software engineering aspects.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Science stream in 11th grade, particularly subjects like Mathematics, Physics, and Computer Science. These subjects are essential for pursuing robotics engineering.</p>

<h2>Step 3: Complete 12th Grade with Focus on Engineering</h2>
<p>Continue with Physics, Mathematics, and Computer Science in 12th grade. This will strengthen your knowledge in areas crucial for robotics, such as mechanics, electronics, and programming.</p>

<h2>Step 4: Pursue a Bachelor's Degree in Robotics Engineering or Related Fields</h2>
<p>After completing 12th grade, pursue a Bachelor's degree in Robotics Engineering, Mechanical Engineering, Electrical Engineering, or Computer Science. A dedicated robotics program will teach you about robot design, control systems, AI, and automation.</p>

<h2>Step 5: Gain Practical Experience</h2>
<p>While studying, work on robotics projects, internships, or participate in robotics competitions like RoboCup or FIRST Robotics. Gaining hands-on experience will significantly enhance your skills and understanding.</p>

<h2>Step 6: Pursue Postgraduate Studies (Optional)</h2>
<p>If you want to specialize in a particular area of robotics, such as AI in robotics, industrial robotics, or robotic surgery, consider pursuing a Master's degree or PhD in Robotics Engineering or related fields.</p>

<h2>Step 7: Start Working as a Robotics Engineer</h2>
<p>After completing your degree, you can apply for positions in robotics companies, automotive industries, research labs, or even in fields like healthcare and space exploration. Robotics engineers can also work on developing autonomous systems and AI-driven robots.</p>

<h2>Skills Required for Robotics Engineers</h2>
<ul>
  <li>Strong foundation in Mathematics, Physics, and Computer Science</li>
  <li>Mechanical design and CAD software skills</li>
  <li>Knowledge of control systems, sensors, and actuators</li>
  <li>Programming skills in languages such as C++, Python, or MATLAB</li>
  <li>Problem-solving and analytical thinking abilities</li>
</ul>

<h2>Salary of a Robotics Engineer</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a robotics engineer is approximately ₹5,00,000 per year. This can vary based on the company, location, and your skill set.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> After gaining experience, the salary can increase to ₹12,00,000 to ₹18,00,000 per year, depending on your expertise and the industry you work in.</p>

<h2>Time to Become a Robotics Engineer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Bachelor's Degree in Robotics Engineering or a related field: 2026-2030</li>
  <li>Gain Practical Experience through internships or projects: 2030-2031</li>
  <li>Start Working as a Robotics Engineer: 2031+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for robotics engineers is expected to grow significantly, particularly in industries like manufacturing, automotive, healthcare, and defense. As automation and AI technologies advance, there will be an increasing need for skilled professionals in robotics.</p>

<h1>Summary</h1>
<p><strong>Robotics Engineer:</strong> A professional who designs, builds, and maintains robots and robotic systems used in various industries.</p>
<p><strong>Time to Become a Robotics Engineer:</strong> It typically takes around 7-8 years to become a robotics engineer after completing 10th grade, including time for education, practical experience, and job entry.</p>
<p><strong>Job Market Outlook:</strong> A growing field with strong demand for skilled professionals due to advancements in automation, robotics, and AI.</p>
<p><strong>Salary:</strong> Starting salary of ₹5,00,000 per year, with potential to increase to ₹12,00,000 to ₹18,00,000 per year as experience and skills grow.</p>
`;}
    else if (grade === "10th" && career === "scientist") {
                   guidanceContainer.innerHTML = `<h1>Path to Becoming a Scientist After 10th Grade</h1>
<p>A scientist conducts research and experiments to advance knowledge in various fields such as biology, physics, chemistry, or environmental science. Here’s how you can become a scientist after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Science (Physics, Chemistry, Biology), Mathematics, and English in 10th grade. A solid understanding of these subjects is fundamental for pursuing a career in science.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Science stream in 11th grade, focusing on subjects such as Physics, Chemistry, and Mathematics (for a career in physical sciences or engineering) or Biology (for a career in life sciences, including research in fields like medicine, biochemistry, or genetics).</p>

<h2>Step 3: Complete 12th Grade with Science Subjects</h2>
<p>In 12th grade, continue with your chosen science subjects. For physical sciences, pursue Physics, Chemistry, and Mathematics. For biological sciences, choose Biology along with Chemistry. This will prepare you for undergraduate courses in science fields.</p>

<h2>Step 4: Pursue a Bachelor's Degree in Science</h2>
<p>After completing 12th grade, enroll in a Bachelor of Science (B.Sc.) program in a specialized field such as Physics, Chemistry, Biology, or Environmental Science. Your choice of major will depend on the area of science you are most interested in.</p>

<h2>Step 5: Specialize in a Specific Area of Science</h2>
<p>During your B.Sc., focus on a specific area of science that excites you. This could be research-based fields like biochemistry, microbiology, astrophysics, or environmental science. Participate in lab work, research projects, and internships to gain hands-on experience.</p>

<h2>Step 6: Pursue Postgraduate Studies (M.Sc., M.Tech, or M.Phil.)</h2>
<p>After completing your B.Sc., pursue a Master's degree (M.Sc.) in your chosen field of study to gain deeper knowledge and skills. For research-focused careers, consider an M.Phil. or specialized training in a field of science.</p>

<h2>Step 7: Obtain a PhD (Optional)</h2>
<p>For those wishing to pursue a career in research or academia, a PhD in a scientific discipline is essential. This involves conducting original research and contributing new knowledge to the field of science. A PhD can take anywhere from 3 to 7 years, depending on the research area.</p>

<h2>Step 8: Start Working as a Scientist</h2>
<p>After completing your studies, you can work as a scientist in various research institutions, universities, government agencies, or private industries. Scientists also play a vital role in sectors like healthcare, pharmaceuticals, technology, and environmental conservation.</p>

<h2>Skills Required for Scientists</h2>
<ul>
  <li>Strong knowledge of scientific principles and methods</li>
  <li>Excellent analytical and problem-solving skills</li>
  <li>Proficiency in laboratory techniques and research methodologies</li>
  <li>Effective communication skills for writing research papers and presenting findings</li>
  <li>Attention to detail and curiosity for exploration</li>
</ul>

<h2>Salary of a Scientist</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a scientist in India can range from ₹4,00,000 to ₹6,00,000 per year, depending on the sector and location.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, the salary can increase to ₹8,00,000 to ₹12,00,000 per year, especially for those working in research institutions, universities, or the private sector.</p>

<h2>Time to Become a Scientist</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Bachelor's Degree (B.Sc.): 2026-2029</li>
  <li>Complete Postgraduate Studies (M.Sc. or M.Phil.): 2029-2031</li>
  <li>Complete PhD (Optional): 2034+</li>
  <li>Start Working as a Scientist: 2031+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for scientists is growing across various sectors, including healthcare, technology, energy, and environmental conservation. New scientific discoveries and technological advancements require continuous research and innovation, providing ample career opportunities for scientists.</p>

<h1>Summary</h1>
<p><strong>Scientist:</strong> A professional who conducts research and experiments in various scientific fields, aiming to make discoveries and advancements in their discipline.</p>
<p><strong>Time to Become a Scientist:</strong> It typically takes 8-12 years to become a scientist, depending on the level of education and specialization, including the time for completing a PhD.</p>
<p><strong>Job Market Outlook:</strong> A growing field with ample opportunities in research institutions, universities, and industries such as healthcare, environmental science, and technology.</p>
<p><strong>Salary:</strong> Starting salary of ₹4,00,000 to ₹6,00,000 per year, with potential to increase to ₹8,00,000 to ₹12,00,000 per year as experience and expertise grow.</p>
`;}
    else if (grade === "10th" && career === "software-developer") {
                guidanceContainer.innerHTML = `<h1>Path to Becoming a Software Developer After 10th Grade</h1>
<p><strong>Software Developer:</strong> A software developer designs, develops, tests, and maintains software applications for various platforms, including websites, mobile apps, and desktop software. Here’s how you can become a software developer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Mathematics, Science, and English in 10th grade. A strong foundation in Mathematics is especially important for programming and logical problem-solving skills, which are crucial for software development.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Science stream in 11th grade with subjects like Mathematics, Physics, and Computer Science (if available). Computer Science will introduce you to the basics of programming and algorithms, laying the groundwork for a career in software development.</p>

<h2>Step 3: Complete 12th Grade with Science Subjects</h2>
<p>In 12th grade, continue with your selected subjects. For software development, Computer Science will be important, along with Mathematics, as it teaches you algorithmic thinking and coding fundamentals.</p>

<h2>Step 4: Pursue a Bachelor's Degree in Computer Science</h2>
<p>After completing 12th grade, enroll in a Bachelor’s degree program, such as B.Tech/B.E. in Computer Science Engineering or B.Sc. in Computer Science. This will give you a comprehensive understanding of software development, programming languages, and computer systems.</p>

<h2>Step 5: Learn Programming Languages</h2>
<p>During your degree, focus on learning programming languages such as Python, Java, C++, and JavaScript. These languages are widely used in software development for creating applications, websites, and systems.</p>

<h2>Step 6: Build Projects and Gain Practical Experience</h2>
<p>Work on software development projects to apply the knowledge you’ve gained. Participate in internships, coding competitions, and contribute to open-source projects. These will help you develop a practical understanding of software development and improve your coding skills.</p>

<h2>Step 7: Pursue Specialization or Advanced Skills</h2>
<p>If you want to specialize, consider learning web development, mobile app development, machine learning, or data science, depending on your area of interest. Enroll in courses or certifications to expand your skills in these fields.</p>

<h2>Step 8: Start Working as a Software Developer</h2>
<p>After completing your education, apply for entry-level software developer positions. You can work in various industries such as technology, finance, healthcare, and e-commerce. Start by building software applications, debugging, and testing, and gradually take on more complex tasks as you gain experience.</p>

<h2>Skills Required for Software Developers</h2>
<ul>
  <li>Proficiency in programming languages like Python, Java, C++, and JavaScript</li>
  <li>Understanding of data structures and algorithms</li>
  <li>Experience with databases and SQL</li>
  <li>Knowledge of version control tools like Git</li>
  <li>Problem-solving and debugging skills</li>
  <li>Understanding of software development methodologies like Agile and Scrum</li>
  <li>Strong communication skills to collaborate with teams and clients</li>
</ul>

<h2>Salary of a Software Developer</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a software developer in India can range from ₹5,00,000 to ₹10,00,000 per year, depending on the company, location, and skill set.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, the salary can increase to ₹15,00,000 to ₹25,00,000 per year, especially for those working in top tech companies or specializing in high-demand technologies.</p>

<h2>Time to Become a Software Developer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Bachelor's Degree (B.Tech/B.E. or B.Sc.): 2026-2029</li>
  <li>Start Working as a Software Developer: 2029+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for software developers is increasing rapidly due to the growing reliance on technology across various sectors. Software development is a dynamic field with numerous job opportunities in tech startups, established companies, and freelancing. Specializations in areas like web development, mobile development, and artificial intelligence offer high demand and growth potential.</p>

<h1>Summary</h1>
<p><strong>Software Developer:</strong> A professional who creates, tests, and maintains software applications for various platforms.</p>
<p><strong>Time to Become a Software Developer:</strong> It typically takes 5-6 years to become a software developer, including completing 12th grade and obtaining a bachelor's degree.</p>
<p><strong>Job Market Outlook:</strong> A growing field with high demand for software developers, especially in areas like web development, mobile apps, and AI.</p>
<p><strong>Salary:</strong> Starting salary of ₹5,00,000 to ₹10,00,000 per year, with potential to increase to ₹15,00,000 to ₹25,00,000 per year with experience.</p>
`;}
        else if (grade === "10th" && career === "stock-broker") {
                 guidanceContainer.innerHTML = `<h1>Path to Becoming a Stock Broker After 10th Grade</h1>
<p><strong>Stock Broker:</strong> A stock broker is a professional who buys and sells stocks, bonds, and other securities on behalf of clients. Here's how you can become a stock broker after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Mathematics, Economics, and English in 10th grade. A strong understanding of mathematics is essential for analyzing market trends and making informed decisions.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Commerce stream in 11th grade with subjects like Economics, Business Studies, and Accountancy. These subjects will give you a foundational understanding of financial markets, which is crucial for a career as a stock broker.</p>

<h2>Step 3: Complete 12th Grade with Commerce Subjects</h2>
<p>In 12th grade, continue with your Commerce subjects. Economics and Business Studies will provide deeper insights into financial markets, business operations, and trading principles.</p>

<h2>Step 4: Pursue a Bachelor's Degree</h2>
<p>After completing 12th grade, enroll in a Bachelor's degree program in Commerce (B.Com), Business Administration (BBA), or Economics (B.A.). You can also consider specializing in Finance or Investment Management during your degree to build knowledge relevant to stock brokerage.</p>

<h2>Step 5: Obtain a Certification in Stock Market Trading</h2>
<p>While pursuing your degree, consider obtaining certifications related to stock market trading. You can pursue courses offered by the National Stock Exchange (NSE) or other financial institutions. Certifications like NISM (National Institute of Securities Markets) Series I and II will help you understand the regulations and best practices in stock trading.</p>

<h2>Step 6: Gain Experience Through Internships</h2>
<p>Interning at a stock brokerage firm or financial institution will give you hands-on experience in the industry. You'll learn how the stock market works, how brokers conduct trades, and how to manage client portfolios.</p>

<h2>Step 7: Become a Registered Stock Broker</h2>
<p>In India, to legally work as a stock broker, you must register with the Securities and Exchange Board of India (SEBI). After meeting the necessary qualifications and obtaining certifications, you can apply for registration to become a licensed stock broker.</p>

<h2>Step 8: Start Working as a Stock Broker</h2>
<p>Once you're certified and registered, you can start working as a stock broker with a brokerage firm or as an independent trader. As a stock broker, you’ll help clients buy and sell securities and provide investment advice based on market trends and individual preferences.</p>

<h2>Skills Required for Stock Brokers</h2>
<ul>
  <li>Strong understanding of financial markets, stocks, bonds, and securities</li>
  <li>Excellent analytical and decision-making skills</li>
  <li>Proficiency in using trading platforms and software</li>
  <li>Knowledge of financial regulations and market trends</li>
  <li>Strong communication skills for advising clients and managing portfolios</li>
  <li>Attention to detail and the ability to handle stress in fast-paced environments</li>
</ul>

<h2>Salary of a Stock Broker</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a stock broker can range from ₹3,00,000 to ₹6,00,000 per year, depending on the firm and your experience.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience and a successful client base, the salary can increase to ₹8,00,000 to ₹15,00,000 per year, along with performance-based incentives and commissions.</p>

<h2>Time to Become a Stock Broker</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Pursue a Bachelor's Degree (B.Com, BBA, or Economics): 2026-2029</li>
  <li>Obtain Stock Market Certifications: 2029+</li>
  <li>Start Working as a Stock Broker: 2029+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for stock brokers is growing as more individuals and institutions invest in the stock market. While the market can be volatile, experienced brokers with strong networks and a good track record can achieve significant success. The field offers lucrative opportunities for those who can navigate market fluctuations and provide valuable investment advice to clients.</p>

<h1>Summary</h1>
<p><strong>Stock Broker:</strong> A professional who buys and sells securities for clients, offering investment advice based on market conditions.</p>
<p><strong>Time to Become a Stock Broker:</strong> It typically takes 5-6 years to become a stock broker, including completing 12th grade, a bachelor’s degree, and obtaining certifications.</p>
<p><strong>Job Market Outlook:</strong> A dynamic field with demand for stock brokers, especially those with expertise in trading, investment management, and financial planning.</p>
<p><strong>Salary:</strong> Starting salary of ₹3,00,000 to ₹6,00,000 per year, with potential to earn ₹8,00,000 to ₹15,00,000 per year with experience and commissions.</p>
`;}
         else if (grade === "10th" && career === "teacher") {
                        guidanceContainer.innerHTML = `<h1>Path to Becoming a Teacher After 10th Grade</h1>
<p><strong>Teacher:</strong> A teacher plays a vital role in shaping the future by educating and guiding students. Here's how you can become a teacher after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects that align with your interests, particularly those related to the field of teaching. For example, if you're interested in teaching Mathematics or Science, make sure to excel in those subjects.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Science or Commerce stream in 11th grade depending on your interests. If you want to become a teacher for subjects like Mathematics, Physics, or Chemistry, then the Science stream is the best choice. If you want to teach subjects like Business Studies or Accountancy, then the Commerce stream would be ideal.</p>

<h2>Step 3: Complete 12th Grade</h2>
<p>In 12th grade, continue with your chosen stream and subjects. Performing well in your 12th exams is important as it will open doors to further education required to become a teacher.</p>

<h2>Step 4: Obtain a Bachelor’s Degree</h2>
<p>After completing 12th grade, pursue a Bachelor’s degree in the subject you wish to teach. For example, if you want to teach Mathematics, you can opt for a B.Sc. (Mathematics) or B.Ed. (Bachelor of Education) after completing your undergraduate studies.</p>

<h2>Step 5: Pursue a B.Ed. (Bachelor of Education)</h2>
<p>After completing your Bachelor’s degree, enroll in a B.Ed. program, which is mandatory to become a teacher in schools. B.Ed. is a professional degree that will help you learn teaching methods and classroom management techniques.</p>

<h2>Step 6: Apply for Teacher Certification</h2>
<p>To teach in government schools, you will need to clear exams like the CTET (Central Teacher Eligibility Test) or state-level teacher exams. These exams test your knowledge of teaching subjects and your ability to teach effectively.</p>

<h2>Step 7: Start Teaching</h2>
<p>Once you complete your B.Ed. and certification exams, you can begin working as a teacher in schools. You can also pursue higher education like a Master’s degree (M.A. or M.Sc.) if you want to teach at the college or university level.</p>

<h2>Skills Required for Teachers</h2>
<ul>
  <li>Strong communication and presentation skills</li>
  <li>Patience and the ability to motivate students</li>
  <li>Knowledge of the subject being taught</li>
  <li>Classroom management skills</li>
  <li>Creative problem-solving skills</li>
  <li>Empathy and understanding of students’ needs</li>
</ul>

<h2>Salary of a Teacher</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a teacher in India can range from ₹2,50,000 to ₹5,00,000 per year, depending on the institution (private or government). The salary can vary based on the school’s location and the level of education (primary, secondary, or higher education).</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, a teacher's salary can range from ₹5,00,000 to ₹8,00,000 per year, with potential for promotions to administrative roles such as Head of Department (HOD) or Principal.</p>

<h2>Time to Become a Teacher</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2029</li>
  <li>Complete B.Ed.: 2030</li>
  <li>Start Teaching: 2030+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for qualified teachers continues to grow in schools across the country. The rise of online education platforms and the need for quality education in rural and urban areas ensure that teaching remains a stable and rewarding career. Teachers who specialize in subjects like Mathematics, Science, and English are particularly in demand.</p>

<h1>Summary</h1>
<p><strong>Teacher:</strong> A professional who educates and guides students, helping them develop academic and life skills.</p>
<p><strong>Time to Become a Teacher:</strong> It takes about 5-6 years to become a teacher, including completing 12th grade, obtaining a Bachelor’s degree, and completing a B.Ed. program.</p>
<p><strong>Job Market Outlook:</strong> There is a consistent demand for teachers, especially in subjects like Mathematics, Science, and English, with the possibility of growth into administrative roles.</p>
<p><strong>Salary:</strong> The starting salary is ₹2,50,000 to ₹5,00,000 per year, and with experience, it can rise to ₹5,00,000 to ₹8,00,000 per year, with additional benefits for senior roles.</p>
`;}
    else if (grade === "10th" && career === "tax-officer") {
            guidanceContainer.innerHTML = `<h1>Path to Becoming a Tax Officer After 10th Grade</h1>
<p><strong>Tax Officer:</strong> A tax officer is responsible for ensuring that individuals and businesses comply with tax laws and regulations. Here's how you can become a tax officer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>Focus on subjects like Mathematics, Economics, and Social Studies, as they will provide a strong foundation for the career of a tax officer. Aim for good academic performance in 10th grade to pave the way for higher studies.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Commerce stream in 11th grade. Subjects like Accountancy, Business Studies, and Economics are particularly important for pursuing a career as a tax officer. These subjects will give you a deep understanding of finance and taxation.</p>

<h2>Step 3: Complete 12th Grade</h2>
<p>In 12th grade, continue studying Commerce subjects. It’s important to score well in subjects like Accountancy, Business Studies, and Economics, as they form the core of your future studies in taxation and finance.</p>

<h2>Step 4: Obtain a Bachelor’s Degree</h2>
<p>After completing 12th grade, pursue a Bachelor’s degree in Commerce (B.Com), Business Administration (BBA), or a related field. A degree in these subjects will help you gain the knowledge required for a career in tax administration.</p>

<h2>Step 5: Prepare for UPSC Exams</h2>
<p>To become a tax officer in India, you need to clear the UPSC (Union Public Service Commission) Civil Services Examination. This exam is required to get into various government services, including the Indian Revenue Service (IRS), which is responsible for tax collection.</p>

<h2>Step 6: Clear UPSC Civil Services Exam</h2>
<p>The UPSC Civil Services Exam consists of three stages: Prelims, Mains, and Interview. You need to focus on subjects like General Studies, Economics, and Indian Polity. You can choose optional subjects such as Public Administration or Anthropology, which are commonly chosen by aspirants aiming for IRS.</p>

<h2>Step 7: Complete Training</h2>
<p>After clearing the UPSC exam, you will undergo training at the National Academy of Direct Taxes (NADT) in Nagpur. This training will help you understand the various aspects of tax administration and policies.</p>

<h2>Step 8: Start Working as a Tax Officer</h2>
<p>Once you complete your training, you will be appointed as a Tax Officer in the Indian Revenue Service (IRS). As a tax officer, you will be responsible for assessing, auditing, and collecting taxes from individuals and businesses.</p>

<h2>Skills Required for Tax Officers</h2>
<ul>
  <li>Strong knowledge of tax laws and regulations</li>
  <li>Analytical and problem-solving skills</li>
  <li>Attention to detail and accuracy in calculations</li>
  <li>Strong communication and interpersonal skills</li>
  <li>Ability to handle pressure and deadlines</li>
  <li>Time management and organizational skills</li>
</ul>

<h2>Salary of a Tax Officer</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a tax officer in India is approximately ₹56,100 to ₹1,77,500 per month, depending on the level and position within the Indian Revenue Service.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience and promotions, the salary can range from ₹70,000 to ₹1,20,000 per month, along with additional allowances and benefits for senior positions.</p>

<h2>Time to Become a Tax Officer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Complete Bachelor’s Degree: 2029</li>
  <li>Prepare for UPSC Exams: 2029-2030</li>
  <li>Clear UPSC Exams: 2030+</li>
  <li>Complete Training: 2031+</li>
  <li>Start Working: 2031+</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for tax officers in India remains stable as tax collection is crucial for government functioning. The Indian Revenue Service offers job security and opportunities for career advancement, especially for those who clear the UPSC exam and get promoted to higher positions.</p>

<h1>Summary</h1>
<p><strong>Tax Officer:</strong> A tax officer is responsible for ensuring compliance with tax laws, managing audits, and collecting taxes.</p>
<p><strong>Time to Become a Tax Officer:</strong> It takes about 7-8 years to become a tax officer, including completing 12th grade, obtaining a Bachelor’s degree, and clearing the UPSC Civil Services Exam.</p>
<p><strong>Job Market Outlook:</strong> The job market for tax officers remains strong, with job security and opportunities for career progression within the Indian Revenue Service.</p>
<p><strong>Salary:</strong> The starting salary is ₹56,100 to ₹1,77,500 per month, and with experience, it can increase to ₹70,000 to ₹1,20,000 per month.</p>
`;}
            else if (grade === "10th" && career === "veterinarian") {
                    guidanceContainer.innerHTML = `<h1>Path to Becoming a Veterinarian After 10th Grade</h1>
<p><strong>Veterinarian:</strong> A veterinarian is a medical professional who diagnoses and treats animals. Here's how you can become a veterinarian after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>In 10th grade, focus on subjects like Science (Physics, Chemistry, and Biology) and Mathematics, as they provide a strong foundation for medical studies. Aim for good academic performance in these subjects to pursue a career in veterinary medicine.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Science stream with Biology in 11th grade. Biology is crucial for understanding animal physiology and diseases. You can also choose additional subjects like Physics and Chemistry, which will help you in your further studies in veterinary science.</p>

<h2>Step 3: Complete 12th Grade</h2>
<p>In 12th grade, focus on subjects like Biology, Physics, Chemistry, and Mathematics. A strong foundation in Biology is essential for pursuing a degree in veterinary science. Ensure you score well in these subjects to meet the eligibility criteria for veterinary entrance exams.</p>

<h2>Step 4: Appear for Veterinary Entrance Exams</h2>
<p>To become a veterinarian in India, you need to clear a veterinary entrance exam like the All India Pre-Veterinary Test (AIPVT) or exams conducted by individual veterinary colleges. These exams assess your knowledge in subjects like Biology, Physics, and Chemistry.</p>

<h2>Step 5: Obtain a Bachelor's Degree in Veterinary Science</h2>
<p>After successfully clearing the entrance exam, enroll in a 5-year Bachelor's degree program in Veterinary Science (BVSc) from a recognized university. This program will equip you with the knowledge and skills required to diagnose, treat, and care for animals.</p>

<h2>Step 6: Complete Internship</h2>
<p>During or after your BVSc program, you will be required to complete an internship, which provides practical training in animal care, surgeries, diagnostics, and other veterinary practices. This hands-on experience is crucial for your career as a veterinarian.</p>

<h2>Step 7: Obtain a License to Practice</h2>
<p>In India, to practice as a veterinarian, you need to register with the Veterinary Council of India (VCI) after completing your BVSc degree. This registration allows you to legally treat animals and provide veterinary services.</p>

<h2>Step 8: Start Working as a Veterinarian</h2>
<p>Once you have completed your degree and obtained your license, you can start working as a veterinarian. You can work in animal hospitals, clinics, zoos, or even with agricultural businesses for animal husbandry. Many veterinarians also choose to start their own practice.</p>

<h2>Skills Required for Veterinarians</h2>
<ul>
  <li>Strong knowledge of animal anatomy, diseases, and treatments</li>
  <li>Excellent problem-solving and diagnostic skills</li>
  <li>Ability to work with animals and handle emergencies</li>
  <li>Good communication skills to interact with pet owners and other professionals</li>
  <li>Patience and empathy for animals</li>
</ul>

<h2>Salary of a Veterinarian</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a veterinarian in India is approximately ₹30,000 to ₹50,000 per month, depending on the location, experience, and type of practice.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, the salary can increase to ₹60,000 to ₹1,00,000 per month, especially if you own your practice or work in specialized fields like surgery or research.</p>

<h2>Time to Become a Veterinarian</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Obtain Bachelor’s Degree in Veterinary Science (BVSc): 2031</li>
  <li>Complete Internship: 2031</li>
  <li>Obtain License and Start Working: 2032</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for veterinarians in India is growing, particularly in urban areas and for specialty practices like animal surgery, dentistry, and emergency care. The growing awareness of animal health and welfare also contributes to a steady demand for veterinary professionals.</p>

<h1>Summary</h1>
<p><strong>Veterinarian:</strong> A veterinarian diagnoses, treats, and cares for animals, including pets, livestock, and wildlife.</p>
<p><strong>Time to Become a Veterinarian:</strong> It takes around 8 years to become a veterinarian, including completing 12th grade, obtaining a BVSc degree, completing an internship, and obtaining a license to practice.</p>
<p><strong>Job Market Outlook:</strong> The job market for veterinarians is growing due to increasing awareness about animal health. Veterinarians can work in clinics, hospitals, and agricultural industries.</p>
<p><strong>Salary:</strong> The starting salary is ₹30,000 to ₹50,000 per month, and with experience, it can increase to ₹60,000 to ₹1,00,000 per month.</p>
`;}
            else if (grade === "10th" && career === "web-developer") {
                    guidanceContainer.innerHTML = `<h1>Path to Becoming a Web Developer After 10th Grade</h1>
<p><strong>Web Developer:</strong> A web developer is responsible for designing, coding, and maintaining websites and web applications. Here's how you can become a web developer after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>In 10th grade, focus on subjects like Computer Science and Mathematics. These subjects help you develop problem-solving skills, which are crucial for web development. Make sure to have a strong foundation in these areas to ease your transition into web development.</p>

<h2>Step 2: Choose a Stream in 11th Grade</h2>
<p>Opt for the Science stream with Computer Science in 11th grade. Computer Science will provide you with knowledge of programming languages, algorithms, and logic, which are essential for web development.</p>

<h2>Step 3: Complete 12th Grade</h2>
<p>In 12th grade, continue focusing on subjects like Computer Science, Physics, and Mathematics. Programming languages like C++, Java, and Python will be helpful. Good marks in these subjects will enable you to pursue a career in web development.</p>

<h2>Step 4: Learn Web Development Skills</h2>
<p>While still in school or after completing 12th, start learning the essential skills for web development. These include:</p>
<ul>
  <li>HTML (Hypertext Markup Language)</li>
  <li>CSS (Cascading Style Sheets)</li>
  <li>JavaScript</li>
  <li>Responsive Web Design (using frameworks like Bootstrap)</li>
  <li>Version control using Git and GitHub</li>
  <li>Basic knowledge of web development tools (text editors, browsers, etc.)</li>
</ul>

<h2>Step 5: Pursue a Web Development Course or Degree</h2>
<p>To further build your web development skills, consider enrolling in one of the following:</p>
<ul>
  <li>A diploma or degree in Computer Science, Information Technology, or Web Development (typically a 3-year course)</li>
  <li>Short-term online courses in web development (available on platforms like Udemy, Coursera, and freeCodeCamp)</li>
</ul>
<p>These courses will teach you both front-end (user-facing part of the website) and back-end (server-side) web development technologies.</p>

<h2>Step 6: Build a Portfolio</h2>
<p>As you learn web development, start building your portfolio by creating personal projects. A portfolio can include:</p>
<ul>
  <li>Static websites (personal blogs, informational pages)</li>
  <li>Interactive web applications (using JavaScript and front-end frameworks like React)</li>
  <li>Back-end web projects (using Node.js, PHP, or databases like MySQL or MongoDB)</li>
</ul>
<p>Having a portfolio will help you demonstrate your skills to potential employers or clients.</p>

<h2>Step 7: Internships or Freelancing</h2>
<p>Gain real-world experience by applying for internships or starting freelancing projects. Internships will help you learn how professional web development works, while freelancing will allow you to gain hands-on experience working with clients.</p>

<h2>Step 8: Get Hired as a Web Developer</h2>
<p>After building your skills, portfolio, and experience, you can start applying for web development jobs. There are many job roles for web developers, including:</p>
<ul>
  <li>Front-end Developer</li>
  <li>Back-end Developer</li>
  <li>Full-stack Developer (both front-end and back-end)</li>
  <li>Web Application Developer</li>
</ul>

<h2>Skills Required for Web Developers</h2>
<ul>
  <li>Proficiency in HTML, CSS, and JavaScript</li>
  <li>Experience with front-end frameworks like React, Angular, or Vue</li>
  <li>Back-end development skills with languages like Node.js, PHP, or Python</li>
  <li>Knowledge of databases (MySQL, MongoDB, etc.)</li>
  <li>Version control systems like Git</li>
  <li>Problem-solving and analytical thinking</li>
</ul>

<h2>Salary of a Web Developer</h2>
<p><strong>Starting Salary (2024):</strong> The starting salary for a web developer in India is approximately ₹25,000 to ₹40,000 per month, depending on skills and location.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience, the salary can increase to ₹60,000 to ₹1,00,000 per month, particularly if you specialize in full-stack development or work with larger companies.</p>

<h2>Time to Become a Web Developer</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Complete 12th Grade: 2026</li>
  <li>Learn Web Development Skills (Self-learning): 2026-2027</li>
  <li>Complete Web Development Course (3-year degree): 2029</li>
  <li>Internships/Freelancing: 2029-2030</li>
  <li>Start Working as a Web Developer: 2030</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for web developers is growing as more businesses move online. Technologies such as responsive design, mobile-friendly websites, and web applications are in high demand. This ensures strong job prospects for web developers in the coming years.</p>

<h1>Summary</h1>
<p><strong>Web Developer:</strong> A web developer builds and maintains websites and web applications, focusing on both the front-end and back-end technologies.</p>
<p><strong>Time to Become a Web Developer:</strong> With a degree and experience, you can become a web developer in about 4-5 years after completing 10th grade.</p>
<p><strong>Job Market Outlook:</strong> The job market for web developers is strong and growing due to the increasing digitalization of businesses and services.</p>
<p><strong>Salary:</strong> The starting salary is ₹25,000 to ₹40,000 per month, and with experience, it can increase to ₹60,000 to ₹1,00,000 per month.</p>
`;}
            else if (grade === "10th" && career === "youtuber") {
                   guidanceContainer.innerHTML = `<h1>Path to Becoming a YouTuber After 10th Grade</h1>
<p><strong>YouTuber:</strong> A YouTuber creates and shares videos on the YouTube platform. Becoming a successful YouTuber requires creativity, consistency, and the ability to engage an audience. Here's how you can become a YouTuber after completing 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>In 10th grade, focus on subjects like English and Computer Science. These will help you with content creation and video editing. Understanding how to communicate well through writing and speaking is key for engaging an audience.</p>

<h2>Step 2: Choose a Niche</h2>
<p>Pick a niche that interests you and aligns with your passion. This could be anything like gaming, education, cooking, lifestyle, tech reviews, beauty tutorials, or vlogging. Choose a topic you're passionate about, as this will help you stay motivated and consistent.</p>

<h2>Step 3: Learn the Basics of Content Creation</h2>
<p>Start learning the basics of content creation, such as video editing, storytelling, and scripting. Here are some important things to focus on:</p>
<ul>
  <li>Video production: Learn how to film with a good camera or smartphone</li>
  <li>Video editing: Use software like Adobe Premiere Pro, Final Cut Pro, or simpler tools like iMovie or Filmora</li>
  <li>Audio quality: Invest in a good microphone to improve sound quality</li>
  <li>Thumbnail creation: Design eye-catching thumbnails using Canva or Photoshop</li>
  <li>SEO (Search Engine Optimization): Learn how to optimize your video titles, descriptions, and tags to make your videos discoverable</li>
</ul>

<h2>Step 4: Create a YouTube Channel</h2>
<p>Create your own YouTube channel, choose a catchy name, and start uploading videos. Make sure to stay consistent with your content and post regularly. Engaging with your viewers in the comments section will help grow your audience.</p>

<h2>Step 5: Build Your Brand</h2>
<p>Building a personal brand is crucial as a YouTuber. Create a unique style that reflects your personality, and maintain consistency in your video content, thumbnails, and overall look of your channel. Also, be active on social media platforms to promote your YouTube channel.</p>

<h2>Step 6: Monetize Your Channel</h2>
<p>Once your channel starts gaining views and subscribers, you can apply for YouTube's Partner Program to start earning money through ads. You can also consider other income streams like:</p>
<ul>
  <li>Brand sponsorships</li>
  <li>Merchandise sales</li>
  <li>Affiliate marketing</li>
</ul>

<h2>Step 7: Improve Your Skills and Knowledge</h2>
<p>To grow as a YouTuber, constantly improve your skills. Learn new video editing techniques, explore new trends in your niche, and keep an eye on what successful YouTubers are doing. Watch tutorials and stay updated on YouTube's algorithm and best practices.</p>

<h2>Step 8: Collaborate with Other YouTubers</h2>
<p>Collaborating with other YouTubers can help you reach a wider audience. Work with creators who share similar interests or have an audience that would enjoy your content.</p>

<h2>Step 9: Be Patient and Consistent</h2>
<p>Building a successful YouTube channel takes time. Be patient, stay consistent with uploading videos, and engage with your audience. It may take months or even years to reach a large number of subscribers, but persistence is key.</p>

<h2>Skills Required for YouTubers</h2>
<ul>
  <li>Video production and editing skills</li>
  <li>Creativity and content ideation</li>
  <li>Strong communication and presentation skills</li>
  <li>SEO and marketing knowledge</li>
  <li>Consistency and discipline</li>
</ul>

<h2>Salary of a YouTuber</h2>
<p><strong>Starting Salary (2024):</strong> The earnings of a YouTuber vary widely based on views, subscribers, and the niche. Initially, many YouTubers earn very little or even nothing, but as your channel grows, you can earn from ads, sponsorships, and other methods. A new YouTuber might earn ₹5,000 to ₹10,000 per month in the beginning.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> After building a large following, YouTubers can earn anywhere from ₹50,000 to ₹2,00,000 per month or more, depending on their niche and content popularity.</p>

<h2>Time to Become a YouTuber</h2>
<ul>
  <li>Complete 10th Grade: 2024</li>
  <li>Start Creating Content: 2024-2025</li>
  <li>Focus on Consistency and Growth: 2025-2026</li>
  <li>Monetize Your Channel: 2026-2027</li>
  <li>Build Your Brand and Income Streams: 2027-2029</li>
</ul>

<h2>Job Market Outlook</h2>
<p>The demand for content creators, including YouTubers, is on the rise as more people consume content online. The YouTube platform itself is growing, offering numerous opportunities for creators to earn through ads, sponsorships, and merchandise. However, success on YouTube requires dedication, consistency, and the ability to adapt to trends.</p>

<h1>Summary</h1>
<p><strong>YouTuber:</strong> A YouTuber creates and shares videos on the YouTube platform, often focusing on a specific niche or topic. It requires creativity, consistency, and good video production skills.</p>
<p><strong>Time to Become a YouTuber:</strong> With dedication and time, you can become a full-time YouTuber in about 3-5 years, depending on your consistency and audience growth.</p>
<p><strong>Job Market Outlook:</strong> The market for content creators is growing as online video consumption continues to rise, offering opportunities for YouTubers to monetize their channels.</p>
<p><strong>Salary:</strong> Starting salary can be low but can increase substantially with more views, subscribers, and brand collaborations. Experienced YouTubers can earn ₹50,000 to ₹2,00,000 per month or more.</p>
`;}
            else if (grade === "10th" && career === "artist") {
                   guidanceContainer.innerHTML = `<h1>Paths to Become an Artist from 10th Grade</h1>
<p>Becoming an artist is a creative and fulfilling career choice. Here's a step-by-step guide to pursuing a career in the arts after completing your 10th grade:</p>

<h2>Step 1: Complete 10th Grade</h2>
<p>After completing your 10th grade, you can choose any stream (Science, Commerce, or Arts) in your 11th grade. However, selecting the Arts stream will be most beneficial if you are interested in becoming an artist.</p>

<h2>Step 2: Choose the Arts Stream in 11th Grade</h2>
<p>In your 11th and 12th grades, opt for subjects that help enhance your creative skills, such as Fine Arts, Drawing, Painting, and Sculpture. These subjects will allow you to develop your artistic abilities and understanding of various art forms.</p>

<h2>Step 3: Pursue a Bachelor's Degree in Fine Arts</h2>
<p>After completing your 12th grade, pursue a Bachelor's degree in Fine Arts or any other relevant field. Some popular degree options for aspiring artists include:</p>
<ul>
  <li>Bachelor of Fine Arts (BFA)</li>
  <li>Bachelor of Design (B.Des)</li>
  <li>Bachelor of Visual Arts</li>
</ul>
<p>During your degree, you will learn various artistic techniques, styles, and the history of art, helping you refine your craft.</p>

<h2>Step 4: Explore Different Art Forms</h2>
<p>Artists can specialize in various mediums, including painting, sculpture, photography, digital art, graphic design, and more. During your studies, explore different art forms to find your true passion and strength. Experiment with various styles and techniques to create a diverse portfolio.</p>

<h2>Step 5: Build a Strong Portfolio</h2>
<p>Building a strong portfolio of your work is crucial in the art industry. Your portfolio should showcase your best pieces, demonstrating your skill, creativity, and unique artistic voice. This will be important when applying for art exhibitions, freelance work, or other professional opportunities.</p>

<h2>Step 6: Gain Experience and Network</h2>
<p>Participate in art exhibitions, art shows, and workshops to gain exposure and connect with other artists and potential clients. Networking is crucial in the art world to find opportunities for commissions, gallery representation, and collaborative projects.</p>

<h2>Step 7: Start Working as an Artist</h2>
<p>After building your portfolio and gaining experience, you can start working as an artist. There are various career options for artists, including:</p>
<ul>
  <li>Freelance Artist</li>
  <li>Gallery Artist</li>
  <li>Art Instructor</li>
  <li>Illustrator for books, magazines, or advertisements</li>
  <li>Graphic Designer or Animator</li>
</ul>

<h2>Skills Required to Become an Artist</h2>
<ul>
  <li>Creativity and imagination</li>
  <li>Strong drawing and painting skills</li>
  <li>Knowledge of art history and different artistic movements</li>
  <li>Understanding of color theory, composition, and design principles</li>
  <li>Proficiency in digital tools and software for digital art (if interested in digital mediums)</li>
  <li>Good communication and networking skills</li>
</ul>

<h2>Salary for an Artist</h2>
<p><strong>Starting Salary (2024):</strong> The salary for an entry-level artist can vary greatly depending on the field and location. Freelance artists may start with low earnings, while those working in galleries or design companies can earn between ₹3 lakh to ₹7 lakh per year.</p>
<p><strong>Expected Salary after 5 Years (2029):</strong> With experience and a strong portfolio, an artist can earn anywhere between ₹10 lakh to ₹20 lakh per year, particularly if they are commissioned for large projects or have gallery representation.</p>

<h2>Time to Become a Professional Artist</h2>
<ul>
  <li>Complete 10th and 12th Grade: 2024-2026 (2 years)</li>
  <li>Pursue Bachelor's Degree in Fine Arts: 2026-2029 (3 years)</li>
  <li>Start Working as an Artist: By 2029 (after 5 years)</li>
</ul>

<h1>Summary</h1>
<p><strong>Time to Become an Artist:</strong> Approximately 5-6 years of education, practice, and gaining experience in the art world to build a career as an artist.</p>
<p><strong>Job Market Outlook:</strong> The art industry offers diverse opportunities, but it can be competitive. The demand for freelance artists, illustrators, and digital artists is growing, particularly in the entertainment and advertising industries.</p>
<p><strong>Salary:</strong> Starting salaries for artists can range from ₹3 lakh to ₹7 lakh per year, with potential growth to ₹10 lakh to ₹20 lakh per year based on experience and reputation.</p>
`;}
    
    else {
        guidanceContainer.innerHTML = "<p>Please select both grade and career path to get guidance.</p>";
    } 
});
