import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import MainPage from "../Pages/MainPage";


const MySwal = withReactContent(Swal);

interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

interface Props {
  navigation: NavigationItem[];
  notes: string[];
}

function Header({ navigation, notes }: Props) {
  const [departureDate, setDepartureDate] = useState<string | null>(null);
  const [returnDate, setReturnDate] = useState<string | null>(null);

  const handleDatePicker = async () => {
    const { value: formValues } = await MySwal.fire({
      title: "Select departure and return date",
      html:
        '<input type="date" id="departure-date" class="swal2-input">' +
        '<input type="date" id="return-date" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        const departureDateInput = document.getElementById(
          "departure-date"
        ) as HTMLInputElement;
        const returnDateInput = document.getElementById(
          "return-date"
        ) as HTMLInputElement;
        return [departureDateInput.value, returnDateInput.value];
      },
    });

    if (formValues) {
      const [departure, returnDate] = formValues;
      setDepartureDate(departure);
      setReturnDate(returnDate);
      MySwal.fire(
        "Selected dates",
        `Departure: ${departure}, Return: ${returnDate}`
      );
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-green-200 fixed top-0 left-0 w-full z-50"
    >
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <h1 className="text-4xl">Information</h1>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <h1>Note</h1>
              <div className="ml-4 flex items-center space-x-4">
                {notes.map((note, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded-lg shadow-md"
                  >
                    {note}
                  </div>
                ))}
              </div>
              <button
                onClick={handleDatePicker}
                className="bg-blue-500 text-white px-3 py-2 rounded-md"
              >
                Filter
              </button>
              {(departureDate || returnDate) && (
                <div className="ml-4">
                  {departureDate && (
                    <div>
                      <strong>Departure Date: </strong>
                      {departureDate}
                    </div>
                  )}
                  {returnDate && (
                    <div>
                      <strong>Return Date: </strong>
                      {returnDate}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}

export default Header;
