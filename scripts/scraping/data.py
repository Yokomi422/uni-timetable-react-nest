from .faculties import (Agriculture, Arts, Economics, Education, Engineering,
                       Law, Liberal_arts, Medicine, Pharmacy, Science)
from pydantic import BaseModel

from .interface import Faculty


class Urls(dict):
    law: str
    medicine: str
    engineering: str
    arts: str
    science: str
    agriculture: str
    economics: str
    education: str
    liberal_arts: str
    pharmacy: str


urls = Urls(
    law="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=1&page=",
    medicine="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=2&page=",
    engineering="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=3&page=",
    arts="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=4&page=",
    science="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=5&page=",
    agriculture="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=6&page=",
    economics="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=7&page=",
    liberal_arts="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=8&page=",
    education="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=9&page=",
    pharmacy="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=10&page=",
)


def get_urls() -> Urls:
    return urls


class LectureAttributes(BaseModel):
    name: str | None
    faculty: str | None
    teacher: str | None
    semester: str | None
    credits: str | None
    period: str | None
    plan: str | None
    how_grading: str | None
    caution: str | None
    code: str | None


class ScraperMapping(dict):
    law: Law
    medicine: Medicine
    engineering: Engineering
    arts: Arts
    science: Science
    agriculture: Agriculture
    economics: Economics
    education: Education
    liberal_arts: Liberal_arts
    pharmacy: Pharmacy


scraping_mapping = ScraperMapping(
    law=Law,
    medicine=Medicine,
    engineering=Engineering,
    arts=Arts,
    science=Science,
    agriculture=Agriculture,
    economics=Economics,
    education=Education,
    liberal_arts=Liberal_arts,
    pharmacy=Pharmacy,
)


def get_scraper(faculty_name: str, url: str) -> Faculty:
    scraper = scraping_mapping.get(faculty_name)
    if not scraper:
        return None
    
    # ここでインスタンス化 
    return scraper(faculty_name=faculty_name, url=url)
