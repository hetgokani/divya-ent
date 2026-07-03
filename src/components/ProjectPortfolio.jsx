import React from "react";
import { motion } from "framer-motion";

const ProjectPortfolio = () => {
  const colors = {
    primary: "#1A194D",
    accent: "#E6A317",
    white: "#FFFFFF",
    bgLight: "#F8F9FA",
    line: "rgba(26, 25, 77, 0.1)",
    text: "#353378",
  };

  const completed = [
    {
      sn: 1,
      principal: "Sardar Sarovar Narmada Nigam Limited",
      amount: "14,977.67",
    },
    {
      sn: 2,
      principal: "Gujarat Water Supply and Sewerage Board",
      amount: "1,33,295.42",
    },
    {
      sn: 3,
      principal: "Gujarat Water Resources Development Corporation Ltd",
      amount: "7,592.77",
    },
    {
      sn: 4,
      principal: "Narmada Water Resources",
      amount: "3,735.32",
    },
    {
      sn: 5,
      principal: "Roads and Buildings",
      amount: "32.09",
    },
    {
      sn: 6,
      principal: "Karjan Nagarpalika",
      amount: "355.94",
    },
    {
      sn: 7,
      principal: "Rajkot Urban Development Authority",
      amount: "475.49",
    },
    {
      sn: 8,
      principal: "Gujarat Council of School Education",
      amount: "57.65",
    },
    {
      sn: 9,
      principal: "Rajkot Municipal Corporation",
      amount: "97.07",
    },
    {
      sn: 10,
      principal: "Gujarat Industrial Development Corporation",
      amount: "955.59",
    },
    {
      sn: 11,
      principal: "Public Implementation Unit",
      amount: "919.15",
    },
  ];

  const ongoing = [
    {
      sn: 1,
      principal: "Sardar Sarovar Narmada Nigam Limited",
      amount: "184.83",
    },
    {
      sn: 2,
      principal: "Gujarat Water Supply and Sewerage Board",
      amount: "89,805.16",
    },
    {
      sn: 3,
      principal: "Surat Municipal Corporation",
      amount: "9,073.81",
    },
    {
      sn: 4,
      principal: "Narmada Water Resources",
      amount: "18,298.80",
    },
    {
      sn: 5,
      principal: "Gujarat Urban Developments Corporation",
      amount: "1,793.75",
    },
    {
      sn: 6,
      principal: "Karjan Nagarpalika",
      amount: "387.47",
    },
    {
      sn: 7,
      principal: "Rajkot Urban Development Authority",
      amount: "2,010.10",
    },
    {
      sn: 8,
      principal: "Gujarat Council of School Education",
      amount: "5,764.41",
    },
    {
      sn: 9,
      principal: "Rajkot Municipal Corporation",
      amount: "130.37",
    },
    {
      sn: 10,
      principal: "Gujarat Industrial Development Corporation",
      amount: "64.28",
    },
  ];

  const TableBlock = ({ title, data, total }) => (
    <div style={{ marginBottom: "60px", width: "100%" }}>
      <h3
        style={{
          fontSize: "clamp(18px, 4vw, 24px)",
          fontWeight: "900",
          color: colors.primary,
          marginBottom: "20px",
          borderLeft: `5px solid ${colors.accent}`,
          paddingLeft: "15px",
          textAlign: "left",
        }}
      >
        {title}{" "}
        <span style={{ fontSize: "12px", opacity: 0.6 }}>
          (RS. IN LACS) 30-06-2026
        </span>
      </h3>

      {/* Header - Hidden on Mobile */}
      <div
        className="table-header"
        style={{
          display: "flex",
          backgroundColor: colors.primary,
          color: colors.white,
          padding: "15px 20px",
          fontWeight: "bold",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <div style={{ flex: "0.5" }} className="hide-mobile">
          SR.
        </div>
        <div style={{ flex: "4" }}>PRINCIPAL</div>
        <div style={{ flex: "1.5", textAlign: "right" }}>COST OF WORK</div>
      </div>

      {/* Data Rows */}
      {data.map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "15px 20px",
            borderBottom: `1px solid ${colors.line}`,
            backgroundColor: colors.white,
            alignItems: "center",
            fontSize: "14px",
          }}
          className="responsive-row"
        >
          <div
            style={{ flex: "0.5", fontWeight: "700" }}
            className="hide-mobile"
          >
            {row.sn}
          </div>
          <div style={{ flex: "4", fontWeight: "700", paddingRight: "10px" }}>
            {row.principal}
          </div>
          <div
            style={{
              flex: "1.5",
              textAlign: "right",
              fontWeight: "800",
              color: colors.primary,
            }}
          >
            {row.amount}
          </div>
        </div>
      ))}

      {/* Total Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "rgba(230, 163, 23, 0.1)",
          borderRadius: "0 0 8px 8px",
          borderTop: `2px solid ${colors.accent}`,
        }}
      >
        <div style={{ fontWeight: "900", color: colors.primary }}>
          TOTAL VALUE
        </div>
        <div
          style={{
            fontWeight: "900",
            color: colors.accent,
            fontSize: "1.2rem",
          }}
        >
          {total}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
          .responsive-row { font-size: 13px !important; }
        }
      `}</style>
    </div>
  );

  return (
    <section
      style={{
        backgroundColor: colors.bgLight,
        padding: "80px 5%",
        fontFamily: '"Montserrat", sans-serif',
        minHeight: "100vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(35px, 8vw, 70px)",
              fontWeight: "900",
              color: colors.primary,
              lineHeight: "1.1",
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            Financial <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `1.5px ${colors.primary}`,
              }}
            >
              Records
            </span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: colors.accent,
              margin: "20px auto",
            }}
          ></div>
        </div>

        <TableBlock
          title="SUCCESSFULLY WORK COMPLETED"
          data={completed}
          total="1,62,494.16"
        />
        <TableBlock
          title="CURRENT WORK ON HAND"
          data={ongoing}
          total="1,27,512.98"
        />
      </motion.div>
    </section>
  );
};

export default ProjectPortfolio;
