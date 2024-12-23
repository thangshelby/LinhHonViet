// Unit tests for: Footer

import Footer from "../Footer";

// src/components/Common/Footer.test.tsx

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// src/components/Common/Footer.test.tsx
describe("Footer() Footer method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    test("should render the Footer component with all sections", () => {
      // Render the Footer component
      render(<Footer />);

      // Check if all main sections are rendered
      expect(screen.getByText("DỊCH VỤ KHÁCH HÀNG")).toBeInTheDocument();
      expect(screen.getByText("THÔNG TIN")).toBeInTheDocument();
      expect(screen.getByText("FACEBOOK")).toBeInTheDocument();
    });

    test('should toggle "Liên hệ" section on click', () => {
      // Render the Footer component
      render(<Footer />);

      // Click on the "Liên hệ" section
      const lienHeToggle = screen.getByText("Liên hệ");
      fireEvent.click(lienHeToggle);

      // Check if contacts are displayed
      expect(screen.getByText("Linh Hồn Việt Sài Gòn")).toBeInTheDocument();
      expect(screen.getByText("Linh Hồn Việt Hà Nội")).toBeInTheDocument();

      // Click again to collapse
      fireEvent.click(lienHeToggle);

      // Check if contacts are hidden
      expect(
        screen.queryByText("Linh Hồn Việt Sài Gòn"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Linh Hồn Việt Hà Nội"),
      ).not.toBeInTheDocument();
    });

    test('should toggle "Chính sách" section on click', () => {
      // Render the Footer component
      render(<Footer />);

      // Click on the "Chính sách" section
      const chinhSachToggle = screen.getByText("Chính sách");
      fireEvent.click(chinhSachToggle);

      // Check if policies are displayed
      expect(screen.getByText("Chính sách đổi và trả")).toBeInTheDocument();
      expect(screen.getByText("Chính sách vận chuyển")).toBeInTheDocument();
      expect(screen.getByText("Chính sách khách hàng")).toBeInTheDocument();

      // Click again to collapse
      fireEvent.click(chinhSachToggle);

      // Check if policies are hidden
      expect(
        screen.queryByText("Chính sách đổi và trả"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Chính sách vận chuyển"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Chính sách khách hàng"),
      ).not.toBeInTheDocument();
    });

    test('should toggle "Mạng xã hội" section on click', () => {
      // Render the Footer component
      render(<Footer />);

      // Click on the "Mạng xã hội" section
      const mangXaHoiToggle = screen.getByText("Mạng xã hội");
      fireEvent.click(mangXaHoiToggle);

      // Check if social media links are displayed
      expect(screen.getByText("Facebook")).toBeInTheDocument();
      expect(screen.getByText("Instagram")).toBeInTheDocument();
      expect(screen.getByText("Tiktok")).toBeInTheDocument();

      // Click again to collapse
      fireEvent.click(mangXaHoiToggle);

      // Check if social media links are hidden
      expect(screen.queryByText("Facebook")).not.toBeInTheDocument();
      expect(screen.queryByText("Instagram")).not.toBeInTheDocument();
      expect(screen.queryByText("Tiktok")).not.toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    test("should not crash when clicking on sections multiple times", () => {
      // Render the Footer component
      render(<Footer />);

      // Click on each section multiple times
      const lienHeToggle = screen.getByText("Liên hệ");
      const chinhSachToggle = screen.getByText("Chính sách");
      const mangXaHoiToggle = screen.getByText("Mạng xã hội");

      for (let i = 0; i < 5; i++) {
        fireEvent.click(lienHeToggle);
        fireEvent.click(chinhSachToggle);
        fireEvent.click(mangXaHoiToggle);
      }

      // Ensure no errors occur and sections toggle correctly
      expect(
        screen.queryByText("Linh Hồn Việt Sài Gòn"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Chính sách đổi và trả"),
      ).not.toBeInTheDocument();
      expect(screen.queryByText("Facebook")).not.toBeInTheDocument();
    });

    test("should handle empty sections gracefully", () => {
      // Mock the component to have empty sections
      // jest.mock("../Footer", () => ({
      //         __esModule: true,
      //         default: () => {
      //           const contacts: string[] = [];
      //           const policies: string[] = [];
      //           const socials: { name: string; icon: JSX.Element }[] = [];
      //           return (
      //             <div>
      //               <div onClick={() => {}}>{contacts.length ? 'Liên hệ' : 'No Contacts'}</div>
      //               <div onClick={() => {}}>{policies.length ? 'Chính sách' : 'No Policies'}</div>
      //               <div onClick={() => {}}>{socials.length ? 'Mạng xã hội' : 'No Socials'}</div>
      //             </div>
      //           );
      //         },
      //       }));

      // Render the mocked Footer component
      render(<Footer />);

      // Check if empty sections are handled
      expect(screen.getByText("No Contacts")).toBeInTheDocument();
      expect(screen.getByText("No Policies")).toBeInTheDocument();
      expect(screen.getByText("No Socials")).toBeInTheDocument();
    });
  });
});

// End of unit tests for: Footer
