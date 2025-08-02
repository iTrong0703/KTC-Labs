-- Yeu cau 1
select p.id, p.name, p.origin 
from product p
where origin = 'Trung Quốc';

-- Yêu cầu 2
select p.id, p.name, p.unit 
from product p
where p.unit = 'cây' or p.unit = 'quyển';

-- Yêu cầu 3
select p.id, p.name 
from product p
where p.id like 'B%01'; -- p.name ko có trường nào bắt đầu bằng 'B' kết thúc bằng '01'

-- Yêu cầu 4
select p.id, p.name, p.origin, p.price 
from product p
where origin = 'Trung Quốc' and (p.price >= 30000 and p.price <= 40000);

-- Yêu cầu 5
select p.id, p.name, p.origin, p.price 
from product p
where (origin = 'Trung Quốc' or origin = 'Thái Lan') and (p.price >= 30000 and p.price <= 40000);

-- Yêu cầu 6
select i.id, i.invoice_total, i.invoice_date 
from invoice i
where i.invoice_date between '2007-01-01' and '2007-01-02';

-- Yêu cầu 7
select i.id, i.invoice_total, i.invoice_date 
from invoice i
where i.invoice_date = '2007-01-01'
order by i.invoice_date asc, i.invoice_total desc; -- trong cùng 1 ngày thì không sắp xếp tăng dần theo ngày được

-- Yêu cầu 8
select c.id, c.full_name, i.invoice_date 
from customer c
join invoice i on c.id = i.customer_id
where i.invoice_date = '2007-01-01';

-- Yêu cầu 9
select i.id, i.invoice_total, e.full_name, i.invoice_date 
from invoice i
join employee e on i.employee_id = e.id
where e.full_name = 'Nguyễn Văn B' and i.invoice_date = '2006-10-28'; -- ko co hoa don nao trong ngay '28/01/2006'

-- Yeu cau 10
select idt.invoice_id, idt.product_id 
from invoice_detail idt
where idt.product_id in ('BB01', 'BB02');

-- Yêu cầu 11
select idt.invoice_id, idt.product_id, idt.amount 
from invoice_detail idt
where idt.product_id in ('BB01', 'BB02') and (idt.amount between 10 and 20);

-- Yêu cầu 12 *
select *
from invoice
where invoice_total = (
    select max(invoice_total) from invoice
);
select *
from invoice
where invoice_total = (
    select min(invoice_total) from invoice
);

-- Yêu cầu 13
select avg(invoice_total) as average_total
from invoice
where year(invoice_date) = 2006;

-- Yêu cầu 14
select sum(p.price * idt.amount) as profit_total
from invoice i
join invoice_detail idt on i.id = idt.invoice_id
join product p on idt.product_id = p.id
where year(invoice_date) = 2006;

-- Yêu cầu 15
select c.id, c.full_name, sum(i.invoice_total) as amount_total
from customer c
join invoice i on c.id = i.customer_id
group by c.id, c.full_name
order by amount_total desc
limit 3;

-- Yêu cầu 16
select count(id) as product_total
from product
where origin = 'Trung Quốc';

-- Yêu cầu 17
select count(id) as product_total
from product
where origin = 'Trung Quốc' or origin = 'Thái Lan';

-- Yêu cầu 18
select origin, count(id) as country_product_total
from product
group by origin;

-- Yêu cầu 19
select origin, max(price) as max_price, min(price) as min_price, avg(price) as avg_price
from product
group by origin;

-- Yêu cầu 20
-- profit 1 day = price * amount 
select i.invoice_date, sum(p.price * idt.amount) as daily_profit
from invoice i
join invoice_detail idt on i.id = idt.invoice_id
join product p on idt.product_id = p.id
group by i.invoice_date
order by i.invoice_date
