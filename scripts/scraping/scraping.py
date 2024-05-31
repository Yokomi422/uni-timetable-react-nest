from .data import get_scraper, get_urls
from .scraper import Scraper


def main():
    urls = get_urls()
    for faculty_name, url in urls.items():
        # インスタンス化された具体的な学部のクラスを取得
        faculty = get_scraper(faculty_name, url)
        if not faculty:
            raise ValueError("No such a faculty")

        faculty.execute()


if __name__ == "__main__":

    main()
