'use client';

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "cn"

import {
    Wallet,
    CreditCard,
    Banknote,
    PiggyBank,
    BriefcaseBusiness,
    Landmark,
} from "lucide-react";
import { useRouter } from "next/navigation";

const walletOptions = [
    {
        value: "wallet",
        label: "Wallet",
        icon: Wallet,
        color: "bg-blue-100 text-blue-600",
        selectedRingColor: "has-data-checked:ring-blue-600",
    },
    {
        value: "credit-card",
        label: "Credit Card",
        icon: CreditCard,
        color: "bg-purple-100 text-purple-600",
        selectedRingColor: "has-data-checked:ring-purple-600",
    },
    {
        value: "cash",
        label: "Cash",
        icon: Banknote,
        color: "bg-green-100 text-green-600",
        selectedRingColor: "has-data-checked:ring-green-600",
    },
    {
        value: "savings",
        label: "Savings",
        icon: PiggyBank,
        color: "bg-amber-100 text-amber-600",
        selectedRingColor: "has-data-checked:ring-amber-600",
    },
    {
        value: "business",
        label: "Business",
        icon: BriefcaseBusiness,
        color: "bg-indigo-100 text-indigo-600",
        selectedRingColor: "has-data-checked:ring-indigo-600",
    },
    {
        value: "bank",
        label: "Bank",
        icon: Landmark,
        color: "bg-rose-100 text-rose-600",
        selectedRingColor: "has-data-checked:ring-rose-600",
    },
];

export default function WalletCreate() {
    const router = useRouter();
    return (
        <div className="w-full max-w-md">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Add New Wallet</FieldLegend>

                        {/* Wallet Name */}
                        <Field>
                            <FieldLabel htmlFor="wallet-name">
                                Wallet Name
                            </FieldLabel>

                            <Input
                                id="wallet-name"
                                name="walletName"
                                placeholder="e.g. Jenius Everyday, Cash"
                                autoComplete="off"
                                required
                            />
                        </Field>

                        {/* Initial Balance */}
                        <Field>
                            <FieldLabel htmlFor="initial-balance">
                                Initial Balance
                            </FieldLabel>

                            <InputGroup>
                                <InputGroupAddon>
                                    <InputGroupText>Rp.</InputGroupText>
                                </InputGroupAddon>

                                <InputGroupInput
                                    id="initial-balance"
                                    name="initialBalance"
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    required
                                />
                            </InputGroup>
                        </Field>

                        {/* Wallet Type */}
                        <FieldSet>
                            <FieldLegend>Icon & Color Tag</FieldLegend>
                            <RadioGroup
                                name="walletIcon"
                                defaultValue="wallet"
                                className="grid grid-cols-6 gap-3"
                            >
                                {walletOptions.map((option) => {
                                    const Icon = option.icon;

                                    return (
                                        <FieldLabel
                                            key={option.value}
                                            htmlFor={`wallet-${option.value}`}
                                            className={cn(
                                                "flex cursor-pointer items-center justify-center rounded-full p-1 transition-all",
                                                "has-data-checked:ring-2",
                                                option.selectedRingColor
                                            )}
                                        >
                                            <RadioGroupItem
                                                id={`wallet-${option.value}`}
                                                value={option.value}
                                                className="peer sr-only absolute"
                                            />

                                            <div className="flex items-center justify-center">
                                                <div
                                                    className={cn(
                                                        "flex size-12 items-center justify-center rounded-full transition-all ",
                                                        option.color,
                                                    )}
                                                >
                                                    <Icon className="size-5" />
                                                </div>
                                            </div>
                                        </FieldLabel>
                                    );
                                })}
                            </RadioGroup>
                        </FieldSet>
                    </FieldSet>

                    {/* Form Actions */}
                    <Field orientation="horizontal">
                        <Button type="submit">
                            Create Wallet
                        </Button>

                        <Button variant="outline" type="button" onClick={() => router.back()}>
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}