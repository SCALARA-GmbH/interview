Task1: database dumps

Q1:

```sql
SELECT account_number, account_description, invoice_id
FROM general_ledger_accounts gla
JOIN invoice_lint_items ili
ON gla.account_number = ili.account_number
ORDER BY invoice_id ASC;
```

Q2:

```sql
SELECT account_number, account_description,
FROM general_ledger_accounts gla
LEFT JOIN invoice_lint_items ili
ON gla.account_number = ili.account_number
WHERE ili.invoice_id IS NULL;
```
No "DISTINCT" or "GROUP BY" needed since invoice_line_items since invoice_id is it's PK and there are no multiple results with LEFT JOIN.

Q3:

Give me a list about vendors (vendor_name) and information (default_account_number, account_description) about their default accounts sorted 
ascending by first the account description and second the vendor name.
