"use client";
 
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
 
export type SelectorOption = {
  label: string;
  value?: string;
  icon?: React.ReactNode;
};

export type SelectorChipsProps = {
  options: (string | SelectorOption)[];
  onChange?: (selected: string[]) => void;
  value?: string[];
  singleSelect?: boolean;
};
 
const SelectorChips: React.FC<SelectorChipsProps> = ({
  options,
  onChange,
  value = [],
  singleSelect = false,
}) => {
  const [selected, setSelected] = useState<string[]>(value);

  const toggleChip = (option: string | SelectorOption) => {
    const optionValue = typeof option === 'string' ? option : (option.value || option.label);
    let updated: string[];

    if (singleSelect) {
      updated = selected.includes(optionValue) ? [] : [optionValue];
    } else {
      updated = selected.includes(optionValue)
        ? selected.filter((o) => o !== optionValue)
        : [...selected, optionValue];
    }

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="flex flex-wrap gap-2 w-full bg-white border border outline-none shadow-xs p-3 rounded-full ">
      {options.map((option) => {
        const isString = typeof option === 'string';
        const label = isString ? option : option.label;
        const value = isString ? option : (option.value || option.label);
        const icon = isString ? undefined : option.icon;
        const isSelected = selected.includes(value);
        
        return (
          <motion.button
            key={value}
            onClick={() => toggleChip(option)}
            initial={false}
            animate={{
              backgroundColor: isSelected ? "#3f5ec2" : "#f9f9f9",
              borderColor: isSelected ? "#f54900" : "#d1d5db",
              color: isSelected ? "#fff" : "#1f2937",
              width: isSelected ? 120 : 100,
              transition: {
                backgroundColor: { duration: 0.15 },
                color: { duration: 0.15 },
                borderColor: { duration: 0.15 },
                width: { type: "spring", stiffness: 400, damping: 20 },
              },
            }}
            className="flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition overflow-hidden grow cursor-pointer"
            style={{ minWidth: 100 }}
          >
            <div className="flex items-center w-full justify-center relative gap-2">
              {icon && (
                <motion.span 
                  className="flex-shrink-0 flex items-center"
                  animate={{
                    color: isSelected ? "#ffffff" : "#3f5ec2",
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {icon}
                </motion.span>
              )}
              <span className="mx-auto">{label}</span>
              <motion.span
                animate={{
                  width: isSelected ? 18 : 0,
                  marginLeft: isSelected ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <AnimatePresence>
                  {isSelected && (
                    <motion.span
                      key="tick"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                      }}
                      style={{ pointerEvents: "none" }}
                    >
                      {/* Tickmark SVG */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <motion.path
                          d="M5 10.5L9 14.5L15 7.5"
                          stroke="#fff"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.25 }}
                        />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};
 
export { SelectorChips };