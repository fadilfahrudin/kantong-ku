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

const walletOptions = [
    {
        value: "wallet",
        label: "Wallet",
        icon: Wallet,
        color: "bg-blue-100 text-blue-600",
        selectedColor: "border-blue-500",
    },
    {
        value: "credit-card",
        label: "Credit Card",
        icon: CreditCard,
        color: "bg-purple-100 text-purple-600",
        selectedColor: "border-purple-500",
    },
    {
        value: "cash",
        label: "Cash",
        icon: Banknote,
        color: "bg-green-100 text-green-600",
        selectedColor: "border-green-500",
    },
    {
        value: "savings",
        label: "Savings",
        icon: PiggyBank,
        color: "bg-amber-100 text-amber-600",
        selectedColor: "border-amber-500",
    },
    {
        value: "business",
        label: "Business",
        icon: BriefcaseBusiness,
        color: "bg-indigo-100 text-indigo-600",
        selectedColor: "border-indigo-500",
    },
    {
        value: "bank",
        label: "Bank",
        icon: Landmark,
        color: "bg-rose-100 text-rose-600",
        selectedColor: "border-rose-500",
    },
];

export default function WalletCreate() {
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
                                    step="any"
                                    defaultValue="0"
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
                                                "flex cursor-pointer items-center justify-center rounded-full  p-1",
                                                // "has-data-[state=cheked]:bg-transparent",
                                                "has-data-[state=cheked]:ring-2",
                                                "has-data-[state=cheked]:ring-ring",
                                                "has-data-[state=cheked]:ring-offset-2",
                                                "has-data-[state=cheked]:ring-offset-background",
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
                                                        "flex size-12 items-center justify-center rounded-full transition-all",
                                                        option.color,
                                                        `peer-data-[state=checked]:${option.selectedColor}`,
                                                        "peer-data-[state=checked]:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-ring"
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

                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}