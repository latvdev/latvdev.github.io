const softwareData = [
  {
    category: "Activation Tools",
    name: "Re-Loader 2.6",
    description: "Activate Windows/Office",
    link: "downloads/Re-Loader_2.6-master.iso"
  },
  {
    category: "Activation Tools",
    name: "AAct v4.3.2 Portable",
    description: "Activate Windows/Office",
    link: "downloads/AActv4.3.2Portable.iso"
  },
  {
    category: "Activation Tools",
    name: "KMS Tools Lite (30.12.2024)",
    description: "Activate Windows/Office",
    link: "downloads/KMS.Tools.Lite.Portable.30.12.2024.iso"
  },
  {
    category: "Activation Tools",
    name: "KMS Tools Portable (08.03.2025)",
    description: "Activate Windows/Office",
    link: "downloads/KMS.Tools.Portable.08.03.2025.iso"
  },
  {
    category: "Activation Tools",
    name: "KMSoffline v2.4.7",
    description: "Activate Windows/Office",
    link: "downloads/KMSofflinev2.4.7.iso"
  },
  {
    category: "Activation Tools",
    name: "Office 2013-2024 C2R Install v7.7.7",
    description: "Activate & Install Office",
    link: "downloads/Office2013-2024C2RInstallv7.7.7.7r26.iso"
  },
  {
    category: "Activation Tools",
    name: "Office Installer+ v1.26",
    description: "Activate & Install Office",
    link: "downloads/OfficeInstaller+v1.26.iso"
  },
  {
    category: "Activation Tools",
    name: "W10 Digital Activation v1.5.5.4",
    description: "Activate Windows 10 Digital License",
    link: "downloads/W10DigitalActivationProgramv1.5.5.4.iso"
  },
  {
    category: "Activation Tools",
    name: "KMS VL ALL AIO",
    description: "Activate Windows/Office by KMS VL ALL AIO",
    link: "downloads/KMS_VL_ALL_AIO.iso"
  },
  {
    category: "Activation Tools",
    name: "KMSAuto 1.7.2",
    description: "Activate Windows/Office by KMSAuto",
    link: "downloads/KMSAuto_1.7.2.iso"
  },
  {
    category: "Adobe & Design",
    name: "AMT Emulator v0.9.2 by PainteR",
    description: "Emulator Adobe Creative Cloud ສຳລັບ Windows 7, 8, 10, 11",
    link: "downloads/AMT_Emulator_v0.9.2_by_PainteR.iso"
  },
  {
    category: "System & Utilities",
    name: "Fix Printer Error 11b",
    description: "ໄຟລ .reg ແກ້ປີ້ນເຕີ້ Error 11b ສຳລັບ Windows 7, 8, 10, 11",
    link: "downloads/fix_printer_error_11b.reg"
  },
  {
    category: "System & Utilities",
    name: "IDM v6.42 Build 35",
    description: "Internet Download Manager 6.42 Build 35",
    link: "downloads/Internet_Download_Manager_IDM_v6.42_Build_35.iso"
  },
  {
    category: "Fonts",
    name: "Phetsarath.ttf",
    description: "ຟອນພາສາລາວ Phetsarath",
    link: "downloads/phetsarath.ttf"
  },
  {
    category: "Fonts",
    name: "PhetsarathIT.ttf",
    description: "ຟອນພາສາລາວ Phetsarath IT",
    link: "downloads/PhetsarathIT.ttf"
  },
  {
    category: "Fonts",
    name: "Saysettha Font",
    description: "ຟອນພາສາລາວ Saysettha",
    link: "downloads/saysettha_ot.ttf"
  },
  {
    category: "System & Utilities",
    name: "Visual C++ Runtimes Nov 2024",
    description: "ລວມ Visual C++ Runtimes ທັງໝົດ ສຳລັບ Windows 7, 8, 10, 11",
    link: "downloads/Visual-C-Runtimes-All-in-One-Nov-2024.zip"
  },
  {
    category: "System & Utilities",
    name: "Restart Spooler Printer",
    description: "ไฟล์ Batch สคริปต์ Restart Spooler Printer",
    link: "downloads/restart_spooler_printer.bat"
  }
];

const container = document.getElementById("softwareContainer");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

// ฟังก์ชัน rendering ป้องกัน XSS
function renderSoftwareList(data) {
  container.innerHTML = "";
  
  if (data.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between";

    const contentDiv = document.createElement("div");

    // Category Badge
    const badge = document.createElement("span");
    badge.className = "inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md mb-2";
    badge.textContent = item.category || "General";

    // Title
    const title = document.createElement("h3");
    title.className = "text-base font-bold text-slate-800 mb-1 leading-snug";
    title.textContent = item.name;

    // Description
    const desc = document.createElement("p");
    desc.className = "text-xs text-slate-500 mb-4";
    desc.textContent = item.description;

    contentDiv.appendChild(badge);
    contentDiv.appendChild(title);
    contentDiv.appendChild(desc);

    // Download Button
    const downloadBtn = document.createElement("a");
    downloadBtn.className = "w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-200 block";
    downloadBtn.href = item.link;
    downloadBtn.target = "_blank";
    downloadBtn.rel = "noopener noreferrer"; // เสริม Security ลิงก์ภายนอก
    downloadBtn.textContent = "ດາວໂຫຼດ (Download)";

    card.appendChild(contentDiv);
    card.appendChild(downloadBtn);
    container.appendChild(card);
  });
}

// ระบบค้นหา Real-time
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = softwareData.filter(sw => 
    sw.name.toLowerCase().includes(query) || 
    sw.description.toLowerCase().includes(query) ||
    (sw.category && sw.category.toLowerCase().includes(query))
  );
  renderSoftwareList(filtered);
});

// Render เริ่มต้น
renderSoftwareList(softwareData);